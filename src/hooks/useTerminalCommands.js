/**
 * Terminal command parser for power-user customization.
 */
export const parseTerminalCommand = (input) => {
  const trimmed = input.trim();
  if (!trimmed) {
    return { message: 'Type `help` to see available commands.' };
  }

  const [group, action, value] = trimmed.split(' ');

  if (group === 'help') {
    return {
      message: `Available commands:\n- theme set dark|light\n- theme accent blue|green|red|purple\n- theme font monospace|serif|sans\n- library view map|list\n- library sort date|topic|uploader\n- mocktest timer 30|45|60\n- mocktest hints on|off\n- chat bubble red|green|blue\n- chat font bold|italic|normal\n- notify mute|unmute\n- notify email|push\n- ai hints on|off\n- ai difficulty easy|medium|hard`
    };
  }

  if (group === 'theme' && action === 'set') {
    return { updates: { theme: value } };
  }
  if (group === 'theme' && action === 'accent') {
    return { updates: { accent: value } };
  }
  if (group === 'theme' && action === 'font') {
    return { updates: { font: value } };
  }
  if (group === 'library' && action === 'view') {
    return { updates: { libraryView: value } };
  }
  if (group === 'library' && action === 'sort') {
    return { updates: { librarySort: value } };
  }
  if (group === 'mocktest' && action === 'timer') {
    return { updates: { mockTimer: Number(value) } };
  }
  if (group === 'mocktest' && action === 'hints') {
    return { updates: { mockHints: value === 'on' } };
  }
  if (group === 'chat' && action === 'bubble') {
    return { updates: { chatBubble: value } };
  }
  if (group === 'chat' && action === 'font') {
    return { updates: { chatFont: value } };
  }
  if (group === 'notify' && (action === 'mute' || action === 'unmute')) {
    return { updates: { notify: action } };
  }
  if (group === 'notify' && (action === 'email' || action === 'push')) {
    return { updates: { notifyChannel: action } };
  }
  if (group === 'ai' && action === 'hints') {
    return { updates: { aiHints: value === 'on' } };
  }
  if (group === 'ai' && action === 'difficulty') {
    return { updates: { aiDifficulty: value } };
  }

  return { message: `Unknown command: ${trimmed}. Type help for commands.` };
};
