import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-blue-500/10 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            {/* <span>Built with</span> */}
            <span>MD ADIL RAZA</span>
            {/* <link rel="icon" type="image/x-icon" href="image.png"></link> */}
            {/* <Heart className="w-4 h-4 text-orange-500 fill-orange-500" /> */}
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>© 2026 All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;