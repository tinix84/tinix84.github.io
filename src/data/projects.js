export const projects = [
  { name: 'GeckoCIRCUITS', desc: 'Open-source multi-domain circuit simulator for power electronics. Electrical + thermal + EMI.', stars: 77, lang: 'Java', cat: 'simulation', url: 'https://github.com/tinix84/GeckoCIRCUITS' },
  { name: 'pyplecs', desc: 'Python PLECS automation — 5x faster batch simulations with caching, REST API, and web GUI.', stars: 30, lang: 'Python', cat: 'simulation', url: 'https://github.com/tinix84/pyplecs' },
  { name: 'MKF', desc: 'Magnetics Knowledge Foundation — C++ core library for magnetic component models.', stars: 23, lang: 'C++', cat: 'magnetics', url: 'https://github.com/tinix84/MKF' },
  { name: 'LinkedinPublic', desc: 'Jupyter notebooks for PE analysis — EMC, magnetics optimization, impedance fitting.', stars: 13, lang: 'Python', cat: 'tools', url: 'https://github.com/tinix84/LinkedinPublic' },
  { name: 'MVB', desc: 'Magnetics Virtual Builder — produce FreeCAD models, meshes, and drawings from MAS schemas.', stars: 12, lang: 'Python', cat: 'magnetics', url: 'https://github.com/tinix84/MVB' },
  { name: 'mutual_transformer', desc: 'Mutual impedance transformer model for accurate AC winding loss characterization.', stars: 6, lang: 'MATLAB', cat: 'magnetics', url: 'https://github.com/tinix84/mutual_transformer' },
  { name: 'interleaved_boost', desc: 'C2000 firmware for 3-phase interleaved boost converter with CLA current control.', stars: 5, lang: 'C', cat: 'hardware', url: 'https://github.com/tinix84/interleaved_boost' },
  { name: 'awesome-power-eval-kits', desc: 'Curated catalog of power electronics evaluation kits with simulations and measurements.', stars: 5, lang: 'Python', cat: 'hardware', url: 'https://github.com/tinix84/awesome-power-eval-kits' },
  { name: 'syr-e', desc: 'Synchronous reluctance machine design with FEMM and multi-objective optimization.', stars: 5, lang: 'MATLAB', cat: 'hardware', url: 'https://github.com/tinix84/syr-e' },
  { name: 'PyOpenMagnetics', desc: 'Python bindings for the OpenMagnetics ecosystem.', stars: 4, lang: 'Python', cat: 'magnetics', url: 'https://github.com/tinix84/PyOpenMagnetics' },
  { name: 'pycircuitsim', desc: 'Unified Python monorepo for circuit simulation automation (PLECS + GeckoCIRCUITS).', stars: 0, lang: 'Python', cat: 'simulation', url: 'https://github.com/tinix84/pycircuitsim' },
  { name: 'agents-kindergarden', desc: 'Playground for AI agentic frameworks — LLM agents for engineering automation.', stars: 0, lang: 'Python', cat: 'tools', url: 'https://github.com/tinix84/agents-kindergarden' },
  { name: 'rosetta-framework', desc: 'Blackbox testing framework inspired by Citadel for automated validation.', stars: 1, lang: 'Python', cat: 'tools', url: 'https://github.com/tinix84/rosetta-framework' },
  { name: 'doublepulse_tester', desc: 'LTspice DPT simulation + MATLAB/Python switching loss map extraction.', stars: 1, lang: 'Python', cat: 'simulation', url: 'https://github.com/tinix84/doublepulse_tester' },
  { name: 'inductor_optimizer', desc: 'FEMM/MATLAB-based inductor optimization with parametric FEM analysis.', stars: 2, lang: 'MATLAB', cat: 'magnetics', url: 'https://github.com/tinix84/inductor_optimizer' },
  { name: 'DV2_Strat', desc: 'Mean-reversion trading strategy for S&P 500 using DV2 indicator and 200-day MA.', stars: 0, lang: 'Python', cat: 'tools', url: 'https://github.com/tinix84/DV2_Strat' },
]

export const langColors = {
  Python: '#3572A5',
  Java: '#b07219',
  MATLAB: '#e16737',
  'C++': '#f34b7d',
  C: '#555555',
  JavaScript: '#f1e05a',
  TypeScript: '#2b7489',
  Jupyter: '#3572A5',
}

export const categories = [
  { key: 'all', label: 'All' },
  { key: 'simulation', label: 'Simulation' },
  { key: 'magnetics', label: 'Magnetics' },
  { key: 'hardware', label: 'Hardware' },
  { key: 'tools', label: 'AI / Tools' },
]
