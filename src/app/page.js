import TaskBoard from '@/components/TaskBoard';
export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 flex justify-center items-start">
      <div className="w-full max-w-2xl">
        
        {/* DESIGN CHOICE: Bold, stylized header to meet 
            the "meaningfully different" requirement. */}
        <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400 mb-8 text-center tracking-tight">
          TASK MANAGER
        </h1>
        <TaskBoard />
        
      </div>
    </main>
  );
}