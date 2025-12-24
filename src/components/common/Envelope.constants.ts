export const envelopeContentStyles = {
  collapsed: {
    transform: 'translateX(-50%) translateY(0) scale(0.98)',
    transition: 'transform 300ms cubic-bezier(.2,.9,.3,1)',
  },
  expanded: {
    transform: 'translateX(-50%) translateY(-120%) scale(1)',
    transition: 'transform 420ms cubic-bezier(.2,.9,.3,1)',
  },
};
