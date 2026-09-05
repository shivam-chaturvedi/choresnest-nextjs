import ConfirmEmailClient from "./ConfirmEmailClient";

export const metadata = {
  title: "Confirm your email | Chores Nest",
  description:
    "We sent a verification link to your inbox. Close the loop by tapping the email and then open Chores Nest to continue.",
};

export default function ConfirmEmailPage() {
  return <ConfirmEmailClient />;
}
