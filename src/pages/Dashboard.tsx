import { Link } from "@tanstack/react-router";
import { useAppSelector } from "../store";

const Dashboard = () => {
  const emailVerified = useAppSelector((s) => s.user.emailVerified);
  const name = useAppSelector((s) => s.user.firstName);

  return (
    <>
      <h1 className="text-center mt-5 text-4xl text-white underline">Dashboard</h1>
      {emailVerified === 0 && (
        <p className="text-center text-white">
          Please verify your email. If you can't find the email and wish to request another, you can
          do so <Link to="/resend-verification">here</Link>
        </p>
      )}

      {emailVerified === 1 && (
        <p className="text-center text-white text-2xl mt-3">Welcome back {name}</p>
      )}
    </>
  );
};

export default Dashboard;
