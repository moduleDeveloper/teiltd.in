import { cn } from '@/lib/styles';

const blob =
  'absolute rounded-[50%] [filter:blur(80px)] opacity-[0.55] mix-blend-screen motion-reduce:animate-none!';

/** Three slowly drifting, blurred gold light blobs behind a section. Hidden on phones,
 * where big blurred layers are the most expensive thing to repaint while scrolling. */
export default function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mobile:hidden">
      <i className={cn(blob, 'w-[520px] h-[520px] bg-[radial-gradient(circle,rgba(232,184,75,0.35),transparent_65%)] top-[-160px] left-[-120px] animate-drift-1')}></i>
      <i className={cn(blob, 'w-[460px] h-[460px] bg-[radial-gradient(circle,rgba(247,212,136,0.22),transparent_65%)] bottom-[-140px] right-[-100px] animate-drift-2')}></i>
      <i className={cn(blob, 'w-[320px] h-[320px] bg-[radial-gradient(circle,rgba(200,145,42,0.28),transparent_65%)] top-[40%] left-[45%] animate-drift-3')}></i>
    </div>
  );
}
