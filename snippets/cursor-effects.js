export function magneticHover(node, strength = 10) {
  function onMove(e) {
    const r = node.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * strength;
    const y = ((e.clientY - r.top) / r.height - 0.5) * strength;
    node.style.transform = `translate(${x}px, ${y}px)`;
  }
  function onLeave() {
    node.style.transform = "translate(0,0)";
  }
  node.addEventListener("mousemove", onMove);
  node.addEventListener("mouseleave", onLeave);
  return () => {
    node.removeEventListener("mousemove", onMove);
    node.removeEventListener("mouseleave", onLeave);
  };
}
