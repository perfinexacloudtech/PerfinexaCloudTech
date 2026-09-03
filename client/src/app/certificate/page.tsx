"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Download, ImagePlus, UserRound } from "lucide-react";

const TEMPLATE = "/certificate-template.png";

export default function CertificatePage() {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [photoZoom, setPhotoZoom] = useState(1);
  const [photoX, setPhotoX] = useState(0);
  const [photoY, setPhotoY] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => () => { if (photoUrl) URL.revokeObjectURL(photoUrl); }, [photoUrl]);

  const handlePhoto = (event: ChangeEvent<HTMLInputElement>) => {
    const photo = event.target.files?.[0];
    if (!photo || !photo.type.startsWith("image/")) return;
    setPhotoZoom(1);
    setPhotoX(0);
    setPhotoY(0);
    setPhotoUrl((current) => {
      if (current) URL.revokeObjectURL(current);
      return URL.createObjectURL(photo);
    });
  };

  function formatName(name: string) {
    return name
      .trim()
      .replace(/\s+/g, " ")
      .split(" ")
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  function createSafeFileName(name: string) {
    return (
      formatName(name)
        .replace(/[<>:"/\\|?*\x00-\x1F]/g, "")
        .replace(/\s+/g, "-")
        .slice(0, 80) || "participant"
    );
  }

  const downloadCertificate = async () => {
    if (!name.trim() || !photoUrl) return;

    try {
      const [template, portrait] = await Promise.all([
        loadImage(TEMPLATE),
        loadImage(photoUrl),
      ]);

      const canvas = document.createElement("canvas");

      canvas.width = template.naturalWidth;
      canvas.height = template.naturalHeight;

      const context = canvas.getContext("2d");

      if (!context) return;

      context.drawImage(template, 0, 0);

      drawPortrait(
        context,
        portrait,
        photoZoom,
        photoX,
        photoY
      );

      drawName(
        context,
        formatName(name)
      );

      canvas.toBlob(async (blob) => {
        if (!blob) return;

        const fileName = `${createSafeFileName(name)}-certificate.png`;

        const file = new File(
          [blob],
          fileName,
          {
            type: "image/png",
          }
        );

        // iPhone / iPad Safari
        if (
          typeof navigator !== "undefined" &&
          navigator.share &&
          navigator.canShare &&
          navigator.canShare({ files: [file] })
        ) {
          try {
            await navigator.share({
              files: [file],
              title: "Certificate",
              text: "Your certificate",
            });

            return;
          } catch (error) {
            // User cancelled share sheet
            if ((error as DOMException)?.name === "AbortError") {
              return;
            }
          }
        }

        // Android Chrome / Desktop fallback
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        link.remove();

        setTimeout(() => {
          URL.revokeObjectURL(url);
        }, 1000);
      }, "image/png");
    } catch (error) {
      console.error("Certificate generation failed:", error);
    }
  };

  const readyToDownload = Boolean(name.trim() && photoUrl);

  return (
    <main className="min-h-screen bg-[#f5f7fb] px-4 pb-10 pt-10 text-[#071d53] sm:px-8 sm:pt-30 lg:pt-34">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Get Your Certificate of Achievement</h1>
          <p className="mt-2 text-slate-600">Enter your details below to personalize and download your official certificate.</p>
        </div>

        <div className="grid items-start gap-8 xl:grid-cols-[330px_1fr]">
          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Participant details</h2>
            <p className="mt-1 text-sm leading-6 text-slate-500">Both fields are required before your certificate can be downloaded.</p>
            <label className="mt-6 block text-sm font-semibold" htmlFor="participant-name">Full name</label>
            <div className="mt-2 flex items-center rounded-xl border border-slate-300 bg-white px-3 focus-within:border-[#bd861f] focus-within:ring-2 focus-within:ring-[#bd861f]/20">
              <UserRound className="h-5 w-5 text-slate-400" aria-hidden="true" />
              <input id="participant-name" className="w-full bg-transparent px-3 py-3.5 text-slate-800 outline-none placeholder:text-slate-400" placeholder="Enter your full name" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <p className="mt-6 text-sm font-semibold">Profile photo</p>
            <button type="button" onClick={() => fileInputRef.current?.click()} className="mt-2 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#bd861f]/50 bg-[#fffaf0] px-4 py-6 text-center transition hover:border-[#bd861f] hover:bg-[#fff7e7]">
              {photoUrl ? <img src={photoUrl} alt="Selected participant" className="h-24 w-24 rounded-full border-2 border-[#bd861f] object-cover" /> : <ImagePlus className="h-9 w-9 text-[#bd861f]" aria-hidden="true" />}
              <span className="mt-3 text-sm font-bold text-[#071d53]">{photoUrl ? "Change photo" : "Upload photo"}</span>
              <span className="mt-1 text-xs text-slate-500">PNG, JPG, or WEBP</span>
            </button>
            <input ref={fileInputRef} className="sr-only" type="file" accept="image/png,image/jpeg,image/webp" onChange={handlePhoto} />
            {photoUrl && <div className="mt-5 space-y-4 rounded-xl bg-slate-50 p-4">
              <div className="flex items-center justify-between"><p className="text-sm font-bold">Adjust photo frame</p><button type="button" onClick={() => { setPhotoZoom(1); setPhotoX(0); setPhotoY(0); }} className="text-xs font-bold text-[#071d53] underline">Reset</button></div>
              <RangeControl label="Zoom" value={photoZoom} min={1} max={2.5} step={0.05} onChange={setPhotoZoom} />
              <RangeControl label="Move left / right" value={photoX} min={-40} max={40} step={1} onChange={setPhotoX} />
              <RangeControl label="Move up / down" value={photoY} min={-40} max={40} step={1} onChange={setPhotoY} />
            </div>}
            <button type="button" disabled={!readyToDownload} onClick={downloadCertificate} className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#071d53] px-4 py-3.5 font-bold text-white shadow-md transition hover:bg-[#0c327d] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none">
              <Download className="h-5 w-5" aria-hidden="true" /> Download certificate
            </button>
          </aside>

          <div className="overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="relative aspect-[3/2] w-full overflow-hidden" aria-label="Certificate preview">
              <img src={TEMPLATE} alt="Certificate template" className="h-full w-full object-cover" />
              {photoUrl && <div className="absolute left-[7.8%] top-[31.5%] h-[28.2%] w-[18.4%] overflow-hidden rounded-full">
                <img src={photoUrl} alt="Participant" className="h-full w-full object-cover" style={{ transform: `translate(${photoX}%, ${photoY}%) scale(${photoZoom})` }} />
              </div>}
              {name.trim() && (
                <>
                  {/* Cover the original golden line */}
                  <div
                    className="
                      absolute
                      left-[28.5%]
                      top-[46.5%]
                      z-10
                      h-[11%]
                      w-[46%]
                    "
                  />

                  {/* New blue line below the name */}
                  <div
                    className="
                      absolute
                      left-[29.2%]
                      top-[56.5%]
                      z-20
                      h-px
                      w-[44%]
                      bg-[#071d53]
                    "
                  />

                  {/* Participant name */}
                  <p
                    className="
                      absolute
                      left-[29%]
                      top-[50.4%]
                      z-30
                      w-[45%]
                      px-2
                      text-center
                      font-serif
                      italic
                      leading-none
                      text-[#b47b16]
                      break-words
                    "
                    style={{
                      fontSize: `clamp(10px, ${
                        name.trim().length > 30
                          ? "2vw"
                          : name.trim().length > 20
                          ? "2vw"
                          : "2vw"
                      }, 51px)`,
                    }}
                  >
                    {formatName(name)}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function loadImage(source: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = source;
  });
}

function drawPortrait(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  zoom: number,
  x: number,
  y: number
) {
  const canvasWidth = context.canvas.width;
  const canvasHeight = context.canvas.height;

  // Same position/size as preview
  const left = canvasWidth * 0.078;
  const top = canvasHeight * 0.315;
  const width = canvasWidth * 0.184;
  const height = canvasHeight * 0.282;

  const centerX = left + width / 2;
  const centerY = top + height / 2;

  // Circle radius
  const radius = Math.min(width, height) / 2;

  const scale = Math.max(
    width / image.naturalWidth,
    height / image.naturalHeight
  );

  const drawWidth = image.naturalWidth * scale * zoom;
  const drawHeight = image.naturalHeight * scale * zoom;

  context.save();

  context.beginPath();
  context.arc(
    centerX,
    centerY,
    radius,
    0,
    Math.PI * 2
  );

  context.clip();

  context.drawImage(
    image,
    centerX - drawWidth / 2 + (width * x / 100),
    centerY - drawHeight / 2 + (height * y / 100),
    drawWidth,
    drawHeight
  );

  context.restore();
}

function RangeControl({ label, value, min, max, step, onChange }: { label: string; value: number; min: number; max: number; step: number; onChange: (value: number) => void }) {
  return <label className="block text-xs font-medium text-slate-600">{label}
    <input className="mt-2 block w-full accent-[#071d53]" type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} />
  </label>;
}

function drawName(context: CanvasRenderingContext2D, name: string) {
  context.fillStyle = "#fffefd";
  context.fillRect(445, 486, 680, 86);
  context.strokeStyle = "#071d53";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(448, 580);
  context.lineTo(1123, 580);
  context.stroke();
  let fontSize = 58;
  context.textAlign = "center";
  context.textBaseline = "middle";
  do {
    context.font = `italic ${fontSize}px Georgia, serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
    fontSize -= 2;
  } while (context.measureText(name).width > 620 && fontSize > 24);
  context.fillStyle = "#b47b16";
  context.fillText(name, 786, 539);
}
