import SutorBankActivityTimeline from './components/SutorBankActivityTimeline.vue';
import SutorBankAvatarMenu from './components/SutorBankAvatarMenu.vue';
import SutorBankButton from './components/SutorBankButton.vue';
import SutorBankCard from './components/SutorBankCard.vue';
import SutorBankCarousel from './components/SutorBankCarousel.vue';
import SutorBankChartWidget from './components/SutorBankChartWidget.vue';
import SutorBankCheckbox from './components/SutorBankCheckbox.vue';
import SutorBankChips from './components/SutorBankChips.vue';
import SutorBankColorPicker from './components/SutorBankColorPicker.vue';
import SutorBankCombobox from './components/SutorBankCombobox.vue';
import SutorBankDatePicker from './components/SutorBankDatePicker.vue';
import SutorBankDialog from './components/SutorBankDialog.vue';
import SutorBankExpansionPanel from './components/SutorBankExpansionPanel.vue';
import SutorBankFileInput from './components/SutorBankFileInput.vue';
import SutorBankList from './components/SutorBankList.vue';
import SutorBankNumberInput from './components/SutorBankNumberInput.vue';
import SutorBankOTPInput from './components/SutorBankOTPInput.vue';
import SutorBankRadio from './components/SutorBankRadio.vue';
import SutorBankSelect from './components/SutorBankSelect.vue';
import SutorBankSidebar from './components/SutorBankSidebar.vue';
import SutorBankSpeedDial from './components/SutorBankSpeedDial.vue';
import SutorBankSwitch from './components/SutorBankSwitch.vue';
import SutorBankTable from './components/SutorBankTable.vue';
import SutorBankTextbox from './components/SutorBankTextbox.vue';
import SutorBankTabs from './components/SutorBankTabs.vue';
import SutorBankAlert from './components/SutorBankAlert.vue';
import SutorBankAvatar from './components/SutorBankAvatar.vue';
import SutorBankBadge from './components/SutorBankBadge.vue';
import SutorBankBanner from './components/SutorBankBanner.vue';
import SutorBankBreadcrumbs from './components/SutorBankBreadcrumbs.vue';
import SutorBankHover from './components/SutorBankHover.vue';
import SutorBankInfiniteScroll from './components/SutorBankInfiniteScroll.vue';
import SutorBankPagination from './components/SutorBankPagination.vue';
import SutorBankProgressCircular from './components/SutorBankProgressCircular.vue';
import SutorBankProgressLinear from './components/SutorBankProgressLinear.vue';
import SutorBankRating from './components/SutorBankRating.vue';
import SutorBankServersideTable from './components/SutorBankServersideTable.vue';
import SutorBankSkeletonLoader from './components/SutorBankSkeletonLoader.vue';
import SutorBankSlider from './components/SutorBankSlider.vue';
import SutorBankSnackbar from './components/SutorBankSnackbar.vue';
import SutorBankSparkline from './components/SutorBankSparkline.vue';
import SutorBankTextarea from './components/SutorBankTextarea.vue';
import SutorBankTimeline from './components/SutorBankTimeline.vue';
import SutorBankTimelineItem from './components/SutorBankTimelineItem.vue';
import SutorBankTooltip from './components/SutorBankTooltip.vue';
import SutorBankExpansionPanels from './components/SutorBanExpansionPanels.vue';
import SutorBankListItem from './components/SutorBankListItem.vue';
import SutorBankRadioGroup from './components/SutorBankRadioGroup.vue';

const components = {
     'sb-button' : SutorBankButton,
    'sb-checkbox' :SutorBankCheckbox,
    'sb-combobox' :SutorBankCombobox,
    'sb-table' :SutorBankTable,
    'sb-textbox' :SutorBankTextbox,
    'sb-side-bar' :SutorBankSidebar,
    'sb-speed-deal' :SutorBankSpeedDial,
    'sb-avatar-menu' :SutorBankAvatarMenu,
    'sb-char-widget' :SutorBankChartWidget,
    'sb-carousel' :SutorBankCarousel,
    'sb-activity-timeline' :SutorBankActivityTimeline,
    'sb-card' :SutorBankCard,
    'sb-chips' :SutorBankChips,
    'sb-color-picker' :SutorBankColorPicker,
    'sb-date-picker' :SutorBankDatePicker,
    'sb-dialog' :SutorBankDialog,
    'sb-expansion-panel' :SutorBankExpansionPanel,
    'sb-file-input' :SutorBankFileInput,
    'sb-list' :SutorBankList,
    'sb-list-item':SutorBankListItem,
    'sb-number-input' :SutorBankNumberInput,
    'sb-otp-input' :SutorBankOTPInput,
    'sb-radio' :SutorBankRadio,
    'sb-radio-group':SutorBankRadioGroup,
    'sb-select' :SutorBankSelect,
    'sb-switch' :SutorBankSwitch,
    'sb-tab' :SutorBankTabs,
    'sb-alert' :SutorBankAlert,
    'sb-avatar' :SutorBankAvatar,
    'sb-badge' :SutorBankBadge,
    'sb-banner' : SutorBankBanner,
    'sb-bread-crumbs' :SutorBankBreadcrumbs,
    'sb-hover' : SutorBankHover,
    'sb-infinite-scroll' :SutorBankInfiniteScroll,
    'sb-pagination' :SutorBankPagination,
    'sb-progress-circular' :SutorBankProgressCircular,
    'sb-progress-linear' :SutorBankProgressLinear,
    'sb-rating' :SutorBankRating,
    'sb-serverside-table' :SutorBankServersideTable,
    'sb-skeleton-loader' :SutorBankSkeletonLoader,
    'sb-slider' :SutorBankSlider,
    'sb-snackbar' :SutorBankSnackbar,
    'sb-spark-line' :SutorBankSparkline,
    'sb-text-area' :SutorBankTextarea,
    'sb-time-line' :SutorBankTimeline,
    'sb-time-line-item' :SutorBankTimelineItem,
    'sb-tooltip' :SutorBankTooltip,
    'sb-expansion-panels':SutorBankExpansionPanels,
};

export default {
    install: (app, options) => {
        Object.entries(components).forEach(([name, component]) => {
            app.component(name, component);
        });
    }
};
