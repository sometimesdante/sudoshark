import Calendar from "@/ui/Calendar";

export default function Login() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center mx-auto">
      <div>
        <div className="text-center">
          <h1 className="text-4xl mb-6">
            <b>Contact Us</b>
          </h1>
        </div>
        <div className="calendar-container">
          <Calendar />
        </div>
      </div>
    </main>
  );
}
