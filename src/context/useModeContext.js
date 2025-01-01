import { inject } from 'vue';

export function useModeContext() {
  const context = inject('modeContext');
  if (!context) {
    throw new Error('useModeContext must be used within a modeProvider');
  }
  return context;
}
