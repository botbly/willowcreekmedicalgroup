export function waitForWidget(timeoutMs = 8000): Promise<any> {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const t = setInterval(() => {
      const w = window as any;
      if (w?.botblyWidget?.open) {
        clearInterval(t);
        resolve(w.botblyWidget);
      } else if (Date.now() - start > timeoutMs) {
        clearInterval(t);
        reject(new Error("widget not ready"));
      }
    }, 100);
  });
}

export async function openWidgetOnce(perSession = true) {
  const KEY = "bb_widget_opened";
  if (perSession && sessionStorage.getItem(KEY)) return false;
  try {
    const widget = await waitForWidget();
    widget.open?.();
    if (perSession) sessionStorage.setItem(KEY, "1");
    return true;
  } catch {
    return false;
  }
}

export function sendToBot(text: string) {
  const w = window as any;
  if (w?.botblyWidget?.openAndSend) {
    w.botblyWidget.openAndSend(text);
    return;
  }
  w?.botblyWidget?.open?.();
  setTimeout(() => w?.botblyWidget?.sendMessage?.(text), 10);
}