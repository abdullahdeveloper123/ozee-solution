'use client';

import { useSiteNavigation } from '@/App';
import type { PageRoute } from '@/types';
import AboutUs from '@/app/componet/page-sections/AboutUs';
import Bim3dCostModeling from '@/app/componet/page-sections/Bim3dCostModeling';
import Blog from '@/app/componet/page-sections/Blog';
import ContactUs from '@/app/componet/page-sections/ContactUs';
import DetailedEstimation from '@/app/componet/page-sections/DetailedEstimation';
import Home from '@/app/componet/page-sections/Home';
import MepHvacEstimation from '@/app/componet/page-sections/MepHvacEstimation';
import PrivacyPolicy from '@/app/componet/page-sections/PrivacyPolicy';
import QuantityTakeOff from '@/app/componet/page-sections/QuantityTakeOff';
import Services from '@/app/componet/page-sections/Services';
import TenderBidEstimates from '@/app/componet/page-sections/TenderBidEstimates';
import TermsOfUse from '@/app/componet/page-sections/TermsOfUse';

export default function RoutePage({ route }: { route: PageRoute }) {
  const { navigate, openEstimator } = useSiteNavigation();

  switch (route) {
    case 'home': return <Home onNavigate={navigate} onOpenEstimationTool={openEstimator} />;
    case 'about-us': return <AboutUs onNavigate={navigate} />;
    case 'services': return <Services onNavigate={navigate} onOpenEstimationTool={openEstimator} />;
    case 'quantity-takeoff': return <QuantityTakeOff onNavigate={navigate} onOpenEstimationTool={openEstimator} />;
    case 'detailed-estimation': return <DetailedEstimation onNavigate={navigate} onOpenEstimationTool={openEstimator} />;
    case 'mep-hvac-estimation': return <MepHvacEstimation onNavigate={navigate} onOpenEstimationTool={openEstimator} />;
    case 'bim-3d-modeling': return <Bim3dCostModeling onNavigate={navigate} onOpenEstimationTool={openEstimator} />;
    case 'tender-bid-estimates': return <TenderBidEstimates onNavigate={navigate} onOpenEstimationTool={openEstimator} />;
    case 'blog': return <Blog />;
    case 'privacy-policy': return <PrivacyPolicy />;
    case 'terms-of-use': return <TermsOfUse />;
    case 'contact-us': return <ContactUs />;
  }
}
