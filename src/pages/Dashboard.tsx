import { Link } from "@tanstack/react-router";
import { useAppSelector } from "../store";

const Dashboard = () => {
  const emailVerified = useAppSelector((s) => s.user.emailVerified);

  return (
    <>
      <h1 className="text-center mt-5 text-4xl text-white underline">Dashboard</h1>
      {emailVerified === 0 && (
        <p>
          Please verify your email. If you can't find the email and wish to request another, you can
          do so <Link to="/resend-verification">here</Link>
        </p>
      )}
    </>
  );
};

export default Dashboard;
