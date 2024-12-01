import Homepage from "./Homepage";
import Conversions from "./Conversions";
import { AIFeatures } from "./AiFeatures";
import Features from "./Features";
import Footer from "./Footer";
export default function Home() {
  return (
    <div>
      <Homepage />
      <Conversions />
      <AIFeatures />
      <Features />
      <Footer />
    </div>
  );
}
