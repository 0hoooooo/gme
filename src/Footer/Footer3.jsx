const Footer3 = () => {
  return (
    <div className="wpml-ls-statics-footer wpml-ls wpml-ls-legacy-list-horizontal">
      <ul>
        <li className="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-first-item wpml-ls-item-legacy-list-horizontal">
          <a href="https://www.gmeremit.com/" className="wpml-ls-link">
            <img
              className="wpml-ls-flag"
              src="https://www.gmeremit.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png"
              alt=""
              width="18"
              height="12"
            />
            <span className="wpml-ls-native">English</span>
          </a>
        </li>
        <li className="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-ko wpml-ls-item-legacy-list-horizontal">
          <a href="https://www.gmeremit.com/ko/" className="wpml-ls-link">
            <img
              className="wpml-ls-flag"
              src="https://www.gmeremit.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/ko.png"
              alt=""
              width="18"
              height="12"
            />
            <span className="wpml-ls-native" lang="ko">
              한국어
            </span>
            <span className="wpml-ls-display">
              <span className="wpml-ls-bracket"> (</span>Korean
              <span className="wpml-ls-bracket">)</span>
            </span>
          </a>
        </li>
        <li className="wpml-ls-slot-footer wpml-ls-item wpml-ls-item-zh-hans wpml-ls-last-item wpml-ls-item-legacy-list-horizontal">
          <a href="https://www.gmeremit.com/zh-hans/" className="wpml-ls-link">
            <img
              className="wpml-ls-flag"
              src="https://www.gmeremit.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/zh.png"
              alt=""
              width="18"
              height="12"
            />
            <span className="wpml-ls-native" lang="zh-hans">
              简体中文
            </span>
            <span className="wpml-ls-display">
              <span className="wpml-ls-bracket"> (</span>Chinese (Simplified)
              <span className="wpml-ls-bracket">)</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Footer3;
