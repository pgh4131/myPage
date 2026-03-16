import { Link } from "react-router";
import { Hero } from "../components/Hero";
import { Interests } from "../components/Interests";
import { TechStack } from "../components/TechStack";
import { LearningNext } from "../components/LearningNext";
import { Timeline } from "../components/Timeline";
import { GuestbookCTA } from "../components/GuestbookCTA";
import { Navigation } from "../components/Navigation";

export function MainPage() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      <Hero />
      <Interests />
      <TechStack />
      <LearningNext />
      <Timeline />
      <GuestbookCTA />
    </div>
  );
}