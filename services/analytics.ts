import { logEvent } from "firebase/analytics";
import { initFirebase } from "@/lib/firebase";

type AnalyticsParamValue = string | number | boolean;
export type AnalyticsEventParams = Record<string, AnalyticsParamValue>;

export type AnalyticsEventName =
  | "page_view"
  | "task_created"
  | "task_completed"
  | "task_deleted"
  | "task_assigned"
  | "calendar_event_created"
  | "calendar_event_deleted"
  | "calendar_event_completed"
  | "list_created"
  | "list_item_added"
  | "list_item_completed"
  | "vault_document_uploaded"
  | "vault_document_deleted"
  | "expense_added"
  | "income_added"
  | "budget_created"
  | "note_created"
  | "note_deleted"
  | "note_pinned"
  | "family_member_added"
  | "family_member_removed"
  | "family_member_switched"
  | "help_search_used"
  | "feature_guide_opened"
  | "tutorial_opened"
  | "data_export_started";

type AnalyticsTracker = (params?: AnalyticsEventParams) => Promise<void>;

const sanitizeParams = (params: AnalyticsEventParams): AnalyticsEventParams => {
  return Object.entries(params).reduce<AnalyticsEventParams>((acc, [key, value]) => {
    if (value === undefined || value === null) {
      return acc;
    }

    acc[key] = value;
    return acc;
  }, {});
};

export const trackEvent = async (
  eventName: string,
  params: AnalyticsEventParams = {}
): Promise<void> => {
  try {
    const analytics = await initFirebase();
    if (!analytics) {
      return;
    }

    const sanitizedParams = sanitizeParams(params);
    logEvent(analytics, eventName, sanitizedParams);
  } catch (error) {
    console.error("Analytics error:", error);
  }
};

const createTracker = (eventName: AnalyticsEventName): AnalyticsTracker => (params = {}) =>
  trackEvent(eventName, params);

export const trackPageView = (pathname: string): Promise<void> => {
  const pageTitle = typeof document !== "undefined" ? document.title : undefined;

  const params: AnalyticsEventParams = {
    page_path: pathname,
    ...(pageTitle ? { page_title: pageTitle } : {}),
  };

  return trackEvent("page_view", params);
};

export const trackTaskCreated = createTracker("task_created");
export const trackTaskCompleted = createTracker("task_completed");
export const trackTaskDeleted = createTracker("task_deleted");
export const trackTaskAssigned = createTracker("task_assigned");

export const trackCalendarEventCreated = createTracker("calendar_event_created");
export const trackCalendarEventDeleted = createTracker("calendar_event_deleted");
export const trackCalendarEventCompleted = createTracker("calendar_event_completed");

export const trackListCreated = createTracker("list_created");
export const trackListItemAdded = createTracker("list_item_added");
export const trackListItemCompleted = createTracker("list_item_completed");

export const trackVaultDocumentUploaded = createTracker("vault_document_uploaded");
export const trackVaultDocumentDeleted = createTracker("vault_document_deleted");

export const trackExpenseAdded = createTracker("expense_added");
export const trackIncomeAdded = createTracker("income_added");
export const trackBudgetCreated = createTracker("budget_created");

export const trackNoteCreated = createTracker("note_created");
export const trackNoteDeleted = createTracker("note_deleted");
export const trackNotePinned = createTracker("note_pinned");

export const trackFamilyMemberAdded = createTracker("family_member_added");
export const trackFamilyMemberRemoved = createTracker("family_member_removed");
export const trackFamilyMemberSwitched = createTracker("family_member_switched");

export const trackHelpSearchUsed = createTracker("help_search_used");
export const trackFeatureGuideOpened = createTracker("feature_guide_opened");
export const trackTutorialOpened = createTracker("tutorial_opened");

export const trackDataExportStarted = createTracker("data_export_started");
