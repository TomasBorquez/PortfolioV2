// Components
import ImageLoader from './assets/ImageLoader/ImageLoader';
import BioTextLoader from './assets/BioTextLoader/BioTextLoader';
import { NameLoader, PositionLoader } from './assets/TitleLoader/TitleLoader';
import {
  BioTitleLoader,
  CertificateLoader,
  DownloadLoader,
  LinkLoader,
} from './assets/BioElementsLoader/BioElementsLoader';
// Redux
import { useDispatch, useSelector } from '../../store/store';
import { getUserState, setLoading } from '../../store/slices/userSlice';
// Icons & Images
import s from './About.module.sass';

function AboutLoading() {
  const dispatch = useDispatch();
  const { loading } = useSelector(getUserState);

  return (
        <div className={s.info}>
          <div id={s.bioContainer}>
            <div id={s.iconContainer}>
              <div id={s.DoggoIcon}>
                <ImageLoader />
              </div>
              <div id={s.onlineContainer}>
                <div id={s.dot} />
              </div>
            </div>
            <div id={s.TittleText}>
              <NameLoader />
            </div>
            <div id={s.PositionLoader}>
              <PositionLoader />
            </div>
            <div id={s.Bio}>
              <div id={s.BioTittle}>
                <BioTitleLoader />
              </div>
              <div id={s.BioSkeleton}>
                <BioTextLoader />
              </div>
            </div>

            <div id={s.WebCertificate}>
              <CertificateLoader />
            </div>

            {/* CV Button */}
            <div id={s.ButtonCVPos}>
              <DownloadLoader />
            </div>

            {/* Github Button */}
            <div id={s.ButtonGPos}>
              <LinkLoader />
            </div>

            {/* Linkedin Button */}
            <div id={s.ButtonLPos}>
              <LinkLoader />
            </div>
          </div>
        </div>
  );
}

export default AboutLoading;
