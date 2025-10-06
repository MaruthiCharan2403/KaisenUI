export interface ComponentInfo {
  id: string;
  name: string;
  description: string;
  category: string;
  fileName: string;
  filePath: string;
  dependencies: string[];
}

let cachedRegistry: ComponentInfo[] | null = null;

export async function getComponentRegistry(): Promise<ComponentInfo[]> {
  if (cachedRegistry) {
    return cachedRegistry;
  }

  // Auto-generated component registry
  const registry: ComponentInfo[] = [
  {
    "id": "cosmic",
    "name": "Cosmic",
    "description": "A cosmic component for 404",
    "category": "404",
    "fileName": "Cosmic",
    "filePath": "src/ui/404/Cosmic.tsx",
    "dependencies": []
  },
  {
    "id": "neon",
    "name": "Neon",
    "description": "A neon component for 404",
    "category": "404",
    "fileName": "Neon",
    "filePath": "src/ui/404/Neon.tsx",
    "dependencies": []
  },
  {
    "id": "vignette",
    "name": "Vignette",
    "description": "A vignette component for 404",
    "category": "404",
    "fileName": "Vignette",
    "filePath": "src/ui/404/Vignette.tsx",
    "dependencies": []
  },
  {
    "id": "blogarticle",
    "name": "Blog Article",
    "description": "A blogarticle component for article",
    "category": "Article",
    "fileName": "BlogArticle",
    "filePath": "src/ui/Article/BlogArticle.tsx",
    "dependencies": []
  },
  {
    "id": "colorfularticle",
    "name": "Colorful Article",
    "description": "A colorfularticle component for article",
    "category": "Article",
    "fileName": "ColorfulArticle",
    "filePath": "src/ui/Article/ColorfulArticle.tsx",
    "dependencies": []
  },
  {
    "id": "featuredarticle",
    "name": "Featured Article",
    "description": "A featuredarticle component for article",
    "category": "Article",
    "fileName": "FeaturedArticle",
    "filePath": "src/ui/Article/FeaturedArticle.tsx",
    "dependencies": []
  },
  {
    "id": "basicavatar",
    "name": "Basic Avatar",
    "description": "A basicavatar component for avatar",
    "category": "Avatar",
    "fileName": "BasicAvatar",
    "filePath": "src/ui/Avatar/BasicAvatar.tsx",
    "dependencies": []
  },
  {
    "id": "groupavatar",
    "name": "Group Avatar",
    "description": "A groupavatar component for avatar",
    "category": "Avatar",
    "fileName": "GroupAvatar",
    "filePath": "src/ui/Avatar/GroupAvatar.tsx",
    "dependencies": []
  },
  {
    "id": "floatingelements",
    "name": "Floating Elements",
    "description": "A floatingelements component for background",
    "category": "Background",
    "fileName": "FloatingElements",
    "filePath": "src/ui/Background/FloatingElements.tsx",
    "dependencies": []
  },
  {
    "id": "geometricpattern",
    "name": "Geometric Pattern",
    "description": "A geometricpattern component for background",
    "category": "Background",
    "fileName": "GeometricPattern",
    "filePath": "src/ui/Background/GeometricPattern.tsx",
    "dependencies": []
  },
  {
    "id": "panel",
    "name": "Panel",
    "description": "A panel component for background",
    "category": "Background",
    "fileName": "Panel",
    "filePath": "src/ui/Background/Panel.tsx",
    "dependencies": []
  },
  {
    "id": "herobanner",
    "name": "Hero Banner",
    "description": "A herobanner component for banner",
    "category": "Banner",
    "fileName": "HeroBanner",
    "filePath": "src/ui/Banner/HeroBanner.tsx",
    "dependencies": []
  },
  {
    "id": "marketingbanner",
    "name": "Marketing Banner",
    "description": "A marketingbanner component for banner",
    "category": "Banner",
    "fileName": "MarketingBanner",
    "filePath": "src/ui/Banner/MarketingBanner.tsx",
    "dependencies": []
  },
  {
    "id": "pricingbanner",
    "name": "Pricing Banner",
    "description": "A pricingbanner component for banner",
    "category": "Banner",
    "fileName": "PricingBanner",
    "filePath": "src/ui/Banner/PricingBanner.tsx",
    "dependencies": []
  },
  {
    "id": "basicblog",
    "name": "Basic Blog",
    "description": "A basicblog component for blog",
    "category": "Blog",
    "fileName": "BasicBlog",
    "filePath": "src/ui/Blog/BasicBlog.tsx",
    "dependencies": []
  },
  {
    "id": "blogpost",
    "name": "Blog Post",
    "description": "A blogpost component for blog",
    "category": "Blog",
    "fileName": "BlogPost",
    "filePath": "src/ui/Blog/BlogPost.tsx",
    "dependencies": []
  },
  {
    "id": "featuredblog",
    "name": "Featured Blog",
    "description": "A featuredblog component for blog",
    "category": "Blog",
    "fileName": "FeaturedBlog",
    "filePath": "src/ui/Blog/FeaturedBlog.tsx",
    "dependencies": []
  },
  {
    "id": "basicbreadcrumb",
    "name": "Basic Breadcrumb",
    "description": "A basicbreadcrumb component for breadcrumb",
    "category": "Breadcrumb",
    "fileName": "BasicBreadcrumb",
    "filePath": "src/ui/Breadcrumb/BasicBreadcrumb.tsx",
    "dependencies": []
  },
  {
    "id": "underlinebreadcrumb",
    "name": "Underline Breadcrumb",
    "description": "A underlinebreadcrumb component for breadcrumb",
    "category": "Breadcrumb",
    "fileName": "UnderlineBreadcrumb",
    "filePath": "src/ui/Breadcrumb/UnderlineBreadcrumb.tsx",
    "dependencies": []
  },
  {
    "id": "glowbutton",
    "name": "Glow Button",
    "description": "A glowbutton component for button",
    "category": "Button",
    "fileName": "GlowButton",
    "filePath": "src/ui/Button/GlowButton.tsx",
    "dependencies": []
  },
  {
    "id": "liquidbutton",
    "name": "Liquid Button",
    "description": "A liquidbutton component for button",
    "category": "Button",
    "fileName": "LiquidButton",
    "filePath": "src/ui/Button/LiquidButton.tsx",
    "dependencies": []
  },
  {
    "id": "neonbutton",
    "name": "Neon Button",
    "description": "A neonbutton component for button",
    "category": "Button",
    "fileName": "NeonButton",
    "filePath": "src/ui/Button/NeonButton.tsx",
    "dependencies": []
  },
  {
    "id": "simplebutton",
    "name": "Simple Button",
    "description": "A simplebutton component for button",
    "category": "Button",
    "fileName": "SimpleButton",
    "filePath": "src/ui/Button/SimpleButton.tsx",
    "dependencies": []
  },
  {
    "id": "featurecard",
    "name": "Feature Card",
    "description": "A featurecard component for card",
    "category": "Card",
    "fileName": "FeatureCard",
    "filePath": "src/ui/Card/FeatureCard.tsx",
    "dependencies": []
  },
  {
    "id": "glowcard",
    "name": "Glow Card",
    "description": "A glowcard component for card",
    "category": "Card",
    "fileName": "GlowCard",
    "filePath": "src/ui/Card/GlowCard.tsx",
    "dependencies": []
  },
  {
    "id": "holographiccard",
    "name": "Holographic Card",
    "description": "A holographiccard component for card",
    "category": "Card",
    "fileName": "HolographicCard",
    "filePath": "src/ui/Card/HolographicCard.tsx",
    "dependencies": []
  },
  {
    "id": "releasecard",
    "name": "Release Card",
    "description": "A releasecard component for card",
    "category": "Card",
    "fileName": "ReleaseCard",
    "filePath": "src/ui/Card/ReleaseCard.tsx",
    "dependencies": []
  },
  {
    "id": "simplefeaturecard",
    "name": "Simple Feature Card",
    "description": "A simplefeaturecard component for card",
    "category": "Card",
    "fileName": "SimpleFeatureCard",
    "filePath": "src/ui/Card/SimpleFeatureCard.tsx",
    "dependencies": []
  },
  {
    "id": "bright",
    "name": "Bright",
    "description": "A bright component for chatui",
    "category": "ChatUI",
    "fileName": "Bright",
    "filePath": "src/ui/ChatUI/Bright.tsx",
    "dependencies": []
  },
  {
    "id": "chatbubble",
    "name": "Chat Bubble",
    "description": "A chatbubble component for chatui",
    "category": "ChatUI",
    "fileName": "ChatBubble",
    "filePath": "src/ui/ChatUI/ChatBubble.tsx",
    "dependencies": []
  },
  {
    "id": "cool",
    "name": "Cool",
    "description": "A cool component for chatui",
    "category": "ChatUI",
    "fileName": "Cool",
    "filePath": "src/ui/ChatUI/Cool.tsx",
    "dependencies": []
  },
  {
    "id": "contactcard",
    "name": "Contact Card",
    "description": "A contactcard component for contact",
    "category": "Contact",
    "fileName": "ContactCard",
    "filePath": "src/ui/Contact/ContactCard.tsx",
    "dependencies": []
  },
  {
    "id": "darkcontactform",
    "name": "Dark Contact Form",
    "description": "A darkcontactform component for contact",
    "category": "Contact",
    "fileName": "DarkContactForm",
    "filePath": "src/ui/Contact/DarkContactForm.tsx",
    "dependencies": []
  },
  {
    "id": "bordercta",
    "name": "Border C T A",
    "description": "A bordercta component for cta",
    "category": "CTA",
    "fileName": "BorderCTA",
    "filePath": "src/ui/CTA/BorderCTA.tsx",
    "dependencies": []
  },
  {
    "id": "getstarted",
    "name": "Get Started",
    "description": "A getstarted component for cta",
    "category": "CTA",
    "fileName": "GetStarted",
    "filePath": "src/ui/CTA/GetStarted.tsx",
    "dependencies": []
  },
  {
    "id": "glassmorphiccta",
    "name": "Glassmorphic C T A",
    "description": "A glassmorphiccta component for cta",
    "category": "CTA",
    "fileName": "GlassmorphicCTA",
    "filePath": "src/ui/CTA/GlassmorphicCTA.tsx",
    "dependencies": []
  },
  {
    "id": "gradientcta",
    "name": "Gradient C T A",
    "description": "A gradientcta component for cta",
    "category": "CTA",
    "fileName": "GradientCTA",
    "filePath": "src/ui/CTA/GradientCTA.tsx",
    "dependencies": []
  },
  {
    "id": "inputcta",
    "name": "Input C T A",
    "description": "A inputcta component for cta",
    "category": "CTA",
    "fileName": "InputCTA",
    "filePath": "src/ui/CTA/InputCTA.tsx",
    "dependencies": []
  },
  {
    "id": "accordion",
    "name": "Accordion",
    "description": "A accordion component for faq",
    "category": "Faq",
    "fileName": "Accordion",
    "filePath": "src/ui/Faq/Accordion.tsx",
    "dependencies": []
  },
  {
    "id": "togglefaq",
    "name": "Toggle F A Q",
    "description": "A togglefaq component for faq",
    "category": "Faq",
    "fileName": "ToggleFAQ",
    "filePath": "src/ui/Faq/ToggleFAQ.tsx",
    "dependencies": []
  },
  {
    "id": "dark",
    "name": "Dark",
    "description": "A dark component for footer",
    "category": "Footer",
    "fileName": "Dark",
    "filePath": "src/ui/Footer/Dark.tsx",
    "dependencies": []
  },
  {
    "id": "light",
    "name": "Light",
    "description": "A light component for footer",
    "category": "Footer",
    "fileName": "Light",
    "filePath": "src/ui/Footer/Light.tsx",
    "dependencies": []
  },
  {
    "id": "simple",
    "name": "Simple",
    "description": "A simple component for footer",
    "category": "Footer",
    "fileName": "Simple",
    "filePath": "src/ui/Footer/Simple.tsx",
    "dependencies": []
  },
  {
    "id": "feedbackform",
    "name": "Feedback Form",
    "description": "A feedbackform component for form",
    "category": "Form",
    "fileName": "FeedbackForm",
    "filePath": "src/ui/Form/FeedbackForm.tsx",
    "dependencies": []
  },
  {
    "id": "requestform",
    "name": "Request Form",
    "description": "A requestform component for form",
    "category": "Form",
    "fileName": "RequestForm",
    "filePath": "src/ui/Form/RequestForm.tsx",
    "dependencies": []
  },
  {
    "id": "gridgallery",
    "name": "Grid Gallery",
    "description": "A gridgallery component for gallery",
    "category": "Gallery",
    "fileName": "GridGallery",
    "filePath": "src/ui/Gallery/GridGallery.tsx",
    "dependencies": []
  },
  {
    "id": "panoromicgallery",
    "name": "Panoromic Gallery",
    "description": "A panoromicgallery component for gallery",
    "category": "Gallery",
    "fileName": "PanoromicGallery",
    "filePath": "src/ui/Gallery/PanoromicGallery.tsx",
    "dependencies": []
  },
  {
    "id": "colormatrix",
    "name": "Color Matrix",
    "description": "A colormatrix component for hero",
    "category": "Hero",
    "fileName": "ColorMatrix",
    "filePath": "src/ui/Hero/ColorMatrix.tsx",
    "dependencies": []
  },
  {
    "id": "diagonalcolorburst",
    "name": "Diagonal Color Burst",
    "description": "A diagonalcolorburst component for hero",
    "category": "Hero",
    "fileName": "DiagonalColorBurst",
    "filePath": "src/ui/Hero/DiagonalColorBurst.tsx",
    "dependencies": []
  },
  {
    "id": "gradienthero",
    "name": "Gradient Hero",
    "description": "A gradienthero component for hero",
    "category": "Hero",
    "fileName": "GradientHero",
    "filePath": "src/ui/Hero/GradientHero.tsx",
    "dependencies": []
  },
  {
    "id": "splitscreen",
    "name": "Split Screen",
    "description": "A splitscreen component for hero",
    "category": "Hero",
    "fileName": "SplitScreen",
    "filePath": "src/ui/Hero/SplitScreen.tsx",
    "dependencies": []
  },
  {
    "id": "concentriccircles",
    "name": "Concentric Circles",
    "description": "A concentriccircles component for loaders",
    "category": "Loaders",
    "fileName": "ConcentricCircles",
    "filePath": "src/ui/Loaders/ConcentricCircles.tsx",
    "dependencies": []
  },
  {
    "id": "liquidbounce",
    "name": "Liquid Bounce",
    "description": "A liquidbounce component for loaders",
    "category": "Loaders",
    "fileName": "LiquidBounce",
    "filePath": "src/ui/Loaders/LiquidBounce.tsx",
    "dependencies": []
  },
  {
    "id": "pulserings",
    "name": "Pulse Rings",
    "description": "A pulserings component for loaders",
    "category": "Loaders",
    "fileName": "PulseRings",
    "filePath": "src/ui/Loaders/PulseRings.tsx",
    "dependencies": []
  },
  {
    "id": "textloader",
    "name": "Text Loader",
    "description": "A textloader component for loaders",
    "category": "Loaders",
    "fileName": "TextLoader",
    "filePath": "src/ui/Loaders/TextLoader.tsx",
    "dependencies": []
  },
  {
    "id": "floatingnavbar",
    "name": "Floating Navbar",
    "description": "A floatingnavbar component for navbar",
    "category": "Navbar",
    "fileName": "FloatingNavbar",
    "filePath": "src/ui/Navbar/FloatingNavbar.tsx",
    "dependencies": []
  },
  {
    "id": "glassmorphismnavbar",
    "name": "Glassmorphism Navbar",
    "description": "A glassmorphismnavbar component for navbar",
    "category": "Navbar",
    "fileName": "GlassmorphismNavbar",
    "filePath": "src/ui/Navbar/GlassmorphismNavbar.tsx",
    "dependencies": []
  },
  {
    "id": "plainnavbar",
    "name": "Plain Navbar",
    "description": "A plainnavbar component for navbar",
    "category": "Navbar",
    "fileName": "PlainNavbar",
    "filePath": "src/ui/Navbar/PlainNavbar.tsx",
    "dependencies": []
  },
  {
    "id": "cardstack",
    "name": "Card Stack",
    "description": "A cardstack component for news",
    "category": "News",
    "fileName": "CardStack",
    "filePath": "src/ui/News/CardStack.tsx",
    "dependencies": []
  },
  {
    "id": "magazine",
    "name": "Magazine",
    "description": "A magazine component for news",
    "category": "News",
    "fileName": "Magazine",
    "filePath": "src/ui/News/Magazine.tsx",
    "dependencies": []
  },
  {
    "id": "newspaper",
    "name": "Newspaper",
    "description": "A newspaper component for news",
    "category": "News",
    "fileName": "Newspaper",
    "filePath": "src/ui/News/Newspaper.tsx",
    "dependencies": []
  },
  {
    "id": "blinking",
    "name": "Blinking",
    "description": "A blinking component for otp",
    "category": "OTP",
    "fileName": "Blinking",
    "filePath": "src/ui/OTP/Blinking.tsx",
    "dependencies": []
  },
  {
    "id": "color",
    "name": "Color",
    "description": "A color component for otp",
    "category": "OTP",
    "fileName": "Color",
    "filePath": "src/ui/OTP/Color.tsx",
    "dependencies": []
  },
  {
    "id": "holographic",
    "name": "Holographic",
    "description": "A holographic component for otp",
    "category": "OTP",
    "fileName": "Holographic",
    "filePath": "src/ui/OTP/Holographic.tsx",
    "dependencies": []
  },
  {
    "id": "colorwave",
    "name": "Color Wave",
    "description": "A colorwave component for pagination",
    "category": "Pagination",
    "fileName": "ColorWave",
    "filePath": "src/ui/Pagination/ColorWave.tsx",
    "dependencies": []
  },
  {
    "id": "basicpricing",
    "name": "Basic Pricing",
    "description": "A basicpricing component for pricing",
    "category": "Pricing",
    "fileName": "BasicPricing",
    "filePath": "src/ui/Pricing/BasicPricing.tsx",
    "dependencies": []
  },
  {
    "id": "colorwave",
    "name": "Color Wave",
    "description": "A colorwave component for pricing",
    "category": "Pricing",
    "fileName": "ColorWave",
    "filePath": "src/ui/Pricing/ColorWave.tsx",
    "dependencies": []
  },
  {
    "id": "gradientwave",
    "name": "Gradient Wave",
    "description": "A gradientwave component for profile",
    "category": "Profile",
    "fileName": "GradientWave",
    "filePath": "src/ui/Profile/GradientWave.tsx",
    "dependencies": []
  },
  {
    "id": "hexagonalprofile",
    "name": "Hexagonal Profile",
    "description": "A hexagonalprofile component for profile",
    "category": "Profile",
    "fileName": "HexagonalProfile",
    "filePath": "src/ui/Profile/HexagonalProfile.tsx",
    "dependencies": []
  },
  {
    "id": "neonprofile",
    "name": "Neon Profile",
    "description": "A neonprofile component for profile",
    "category": "Profile",
    "fileName": "NeonProfile",
    "filePath": "src/ui/Profile/NeonProfile.tsx",
    "dependencies": []
  },
  {
    "id": "minimal",
    "name": "Minimal",
    "description": "A minimal component for register_login",
    "category": "Register_Login",
    "fileName": "Minimal",
    "filePath": "src/ui/Register_Login/Minimal.tsx",
    "dependencies": []
  },
  {
    "id": "sliding",
    "name": "Sliding",
    "description": "A sliding component for register_login",
    "category": "Register_Login",
    "fileName": "Sliding",
    "filePath": "src/ui/Register_Login/Sliding.tsx",
    "dependencies": []
  },
  {
    "id": "geometric",
    "name": "Geometric",
    "description": "A geometric component for review",
    "category": "Review",
    "fileName": "Geometric",
    "filePath": "src/ui/Review/Geometric.tsx",
    "dependencies": []
  },
  {
    "id": "offsetblocks",
    "name": "Offset Blocks",
    "description": "A offsetblocks component for review",
    "category": "Review",
    "fileName": "OffsetBlocks",
    "filePath": "src/ui/Review/OffsetBlocks.tsx",
    "dependencies": []
  },
  {
    "id": "emojipicker",
    "name": "Emoji Picker",
    "description": "A emojipicker component for social",
    "category": "Social",
    "fileName": "EmojiPicker",
    "filePath": "src/ui/Social/EmojiPicker.tsx",
    "dependencies": []
  },
  {
    "id": "poll",
    "name": "Poll",
    "description": "A poll component for social",
    "category": "Social",
    "fileName": "Poll",
    "filePath": "src/ui/Social/Poll.tsx",
    "dependencies": []
  },
  {
    "id": "sharemenu",
    "name": "Share Menu",
    "description": "A sharemenu component for social",
    "category": "Social",
    "fileName": "ShareMenu",
    "filePath": "src/ui/Social/ShareMenu.tsx",
    "dependencies": []
  },
  {
    "id": "videocomments",
    "name": "Video Comments",
    "description": "A videocomments component for social",
    "category": "Social",
    "fileName": "VideoComments",
    "filePath": "src/ui/Social/VideoComments.tsx",
    "dependencies": []
  },
  {
    "id": "glassmorphictimelinesteps",
    "name": "Glassmorphic Timeline Steps",
    "description": "A glassmorphictimelinesteps component for steps",
    "category": "Steps",
    "fileName": "GlassmorphicTimelineSteps",
    "filePath": "src/ui/Steps/GlassmorphicTimelineSteps.tsx",
    "dependencies": []
  },
  {
    "id": "minimalistcardsteps",
    "name": "Minimalist Card Steps",
    "description": "A minimalistcardsteps component for steps",
    "category": "Steps",
    "fileName": "MinimalistCardSteps",
    "filePath": "src/ui/Steps/MinimalistCardSteps.tsx",
    "dependencies": []
  },
  {
    "id": "neonprogresssteps",
    "name": "Neon Progress Steps",
    "description": "A neonprogresssteps component for steps",
    "category": "Steps",
    "fileName": "NeonProgressSteps",
    "filePath": "src/ui/Steps/NeonProgressSteps.tsx",
    "dependencies": []
  },
  {
    "id": "glassmorphicdatatable",
    "name": "Glassmorphic Data Table",
    "description": "A glassmorphicdatatable component for table",
    "category": "Table",
    "fileName": "GlassmorphicDataTable",
    "filePath": "src/ui/Table/GlassmorphicDataTable.tsx",
    "dependencies": []
  },
  {
    "id": "minimalisticdashboardtable",
    "name": "Minimalistic Dashboard Table",
    "description": "A minimalisticdashboardtable component for table",
    "category": "Table",
    "fileName": "MinimalisticDashboardTable",
    "filePath": "src/ui/Table/MinimalisticDashboardTable.tsx",
    "dependencies": []
  },
  {
    "id": "containedpilltabs",
    "name": "Contained Pill Tabs",
    "description": "A containedpilltabs component for tabs",
    "category": "Tabs",
    "fileName": "ContainedPillTabs",
    "filePath": "src/ui/Tabs/ContainedPillTabs.tsx",
    "dependencies": []
  },
  {
    "id": "minimalunderlinetabs",
    "name": "Minimal Underline Tabs",
    "description": "A minimalunderlinetabs component for tabs",
    "category": "Tabs",
    "fileName": "MinimalUnderlineTabs",
    "filePath": "src/ui/Tabs/MinimalUnderlineTabs.tsx",
    "dependencies": []
  },
  {
    "id": "verticalbordertabs",
    "name": "Vertical Border Tabs",
    "description": "A verticalbordertabs component for tabs",
    "category": "Tabs",
    "fileName": "VerticalBorderTabs",
    "filePath": "src/ui/Tabs/VerticalBorderTabs.tsx",
    "dependencies": []
  },
  {
    "id": "colorgrid",
    "name": "Colorgrid",
    "description": "A colorgrid component for team",
    "category": "Team",
    "fileName": "Colorgrid",
    "filePath": "src/ui/Team/Colorgrid.tsx",
    "dependencies": []
  },
  {
    "id": "teamgrid",
    "name": "Team Grid",
    "description": "A teamgrid component for team",
    "category": "Team",
    "fileName": "TeamGrid",
    "filePath": "src/ui/Team/TeamGrid.tsx",
    "dependencies": []
  },
  {
    "id": "teammember",
    "name": "Team Member",
    "description": "A teammember component for team",
    "category": "Team",
    "fileName": "TeamMember",
    "filePath": "src/ui/Team/TeamMember.tsx",
    "dependencies": []
  },
  {
    "id": "teamprofilehighlight",
    "name": "Team Profile Highlight",
    "description": "A teamprofilehighlight component for team",
    "category": "Team",
    "fileName": "TeamProfileHighlight",
    "filePath": "src/ui/Team/TeamProfileHighlight.tsx",
    "dependencies": []
  },
  {
    "id": "basictestimonial",
    "name": "Basic Testimonial",
    "description": "A basictestimonial component for testimonial",
    "category": "Testimonial",
    "fileName": "BasicTestimonial",
    "filePath": "src/ui/Testimonial/BasicTestimonial.tsx",
    "dependencies": []
  },
  {
    "id": "splittestimonial",
    "name": "Split Testimonial",
    "description": "A splittestimonial component for testimonial",
    "category": "Testimonial",
    "fileName": "SplitTestimonial",
    "filePath": "src/ui/Testimonial/SplitTestimonial.tsx",
    "dependencies": []
  },
  {
    "id": "timelinetestimonial",
    "name": "Timeline Testimonial",
    "description": "A timelinetestimonial component for testimonial",
    "category": "Testimonial",
    "fileName": "TimelineTestimonial",
    "filePath": "src/ui/Testimonial/TimelineTestimonial.tsx",
    "dependencies": []
  },
  {
    "id": "fluidmotiontimeline",
    "name": "Fluid Motion Timeline",
    "description": "A fluidmotiontimeline component for timeline",
    "category": "Timeline",
    "fileName": "FluidMotionTimeline",
    "filePath": "src/ui/Timeline/FluidMotionTimeline.tsx",
    "dependencies": []
  },
  {
    "id": "mediatimeline",
    "name": "Media Timeline",
    "description": "A mediatimeline component for timeline",
    "category": "Timeline",
    "fileName": "MediaTimeline",
    "filePath": "src/ui/Timeline/MediaTimeline.tsx",
    "dependencies": []
  },
  {
    "id": "splitmilestones",
    "name": "Split Milestones",
    "description": "A splitmilestones component for timeline",
    "category": "Timeline",
    "fileName": "SplitMilestones",
    "filePath": "src/ui/Timeline/SplitMilestones.tsx",
    "dependencies": []
  },
  {
    "id": "weathercard",
    "name": "Weather Card",
    "description": "A weathercard component for weather",
    "category": "Weather",
    "fileName": "WeatherCard",
    "filePath": "src/ui/Weather/WeatherCard.tsx",
    "dependencies": []
  },
  {
    "id": "weatherforecast",
    "name": "Weather Forecast",
    "description": "A weatherforecast component for weather",
    "category": "Weather",
    "fileName": "WeatherForecast",
    "filePath": "src/ui/Weather/WeatherForecast.tsx",
    "dependencies": []
  },
  {
    "id": "weatherwidget",
    "name": "Weather Widget",
    "description": "A weatherwidget component for weather",
    "category": "Weather",
    "fileName": "WeatherWidget",
    "filePath": "src/ui/Weather/WeatherWidget.tsx",
    "dependencies": []
  }
];

  cachedRegistry = registry;
  return registry;
}

export function clearRegistryCache() {
  cachedRegistry = null;
}
