---
sidebar_position: 7
---

# Roadmap

This page outlines the upcoming developments and planned features for MantisTable UI. We're committed to continuously improving the platform to better serve the Semantic Table Interpretation community.

## Current Development Status

For the most up-to-date information about ongoing development, planned features, and known issues, please refer to our [GitHub Issues page](https://github.com/unimib-datAI/mantistable-ui/issues).

The Issues page contains:
- **Feature Requests**: New functionality proposals and enhancements
- **Bug Reports**: Known issues and their resolution status
- **Development Milestones**: Planned releases and their progress
- **Community Discussions**: User feedback and suggestions

## Development Timeline

Our development roadmap is organized into milestones with specific features and improvements planned for each release:

<div className="timeline-container">
  <div className="timeline">
          <div className="timeline-item">
        <div className="timeline-marker v1-2">1.2</div>
        <div className="timeline-content">
          <h4>v1.2 Milestone</h4>
          <p className="milestone-date">Due by September 15, 2025</p>
          <ul>
            <li><strong>Auto-complete functionality</strong>: Intelligent suggestions for table annotations and data entry</li>
            <li><strong>Manual editing of the annotations</strong>: Enhanced interface for direct editing and refinement of semantic annotations</li>
          </ul>
        </div>
      </div>
    
          <div className="timeline-item">
        <div className="timeline-marker v1-3">1.3</div>
        <div className="timeline-content">
          <h4>v1.3 Milestone</h4>
          <p className="milestone-date">Due by November 1, 2025</p>
          <ul>
            <li><strong>Annotation suggestions</strong>: AI-powered recommendations for semantic interpretation and annotation</li>
          </ul>
        </div>
      </div>

    <div className="timeline-item">
      <div className="timeline-marker v1-x">1.X</div>
      <div className="timeline-content">
        <h4>v1.X Milestone</h4>
        <ul>
          <li><strong>Annotation visualisation</strong>: Interactive overlays to display semantic links directly in the table</li>
          <li><strong>Extended plugin modules</strong>: New export formats and transformation plugins</li>
        </ul>
      </div>
    </div>
    
          <div className="timeline-item">
        <div className="timeline-marker v2-0">2.0</div>
        <div className="timeline-content">
          <h4>v2.0 Milestone</h4>
          <p className="milestone-date">Due by February 1, 2026</p>
          <ul>
            <li><strong>Import of tables via API</strong>: RESTful API endpoints for programmatic table import and integration</li>
            <li><strong>User preferences</strong>: Customisable layouts, themes (dark/light mode) and saved settings</li>
          </ul>
        </div>
      </div>

          <div className="timeline-item">
        <div className="timeline-marker v2-1">2.1</div>
        <div className="timeline-content">
          <h4>v2.1 Milestone</h4>
          <ul>
            <li><strong>Semantic search & filter</strong>: Find and filter annotations by entity, property or column type (NE/LIT)</li>
          </ul>
        </div>
      </div>
      
      <div className="timeline-item">
        <div className="timeline-marker v2-x">2.X</div>
        <div className="timeline-content">
          <h4>v2.X Milestone</h4>
          <ul>
            <li><strong>Plugin marketplace</strong>: Centralized repository for community-contributed plugins with easy installation and management</li>
          </ul>
        </div>
      </div>
      
      <div className="timeline-item future">
        <div className="timeline-marker future">X</div>
        <div className="timeline-content future">
          <h4>Future Milestones</h4>
          <p>More exciting features and improvements are planned for future releases...</p>
        </div>
      </div>
    </div>
  </div>


<style>{`
  .timeline-container {
    margin: 2rem 0;
    padding: 1rem;
  }
  
  .timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    left: 22px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--ifm-color-primary);
  }
  
  .timeline-item.future::before {
    content: '';
    position: absolute;
    left: 22px;
    top: 30px;
    bottom: -2rem;
    width: 2px;
    background: repeating-linear-gradient(
      to bottom,
      var(--ifm-color-primary) 0px,
      var(--ifm-color-primary) 4px,
      transparent 4px,
      transparent 8px
    );
    z-index: 0;
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 2rem;
    padding-left: 60px;
  }
  
  .timeline-marker {
    position: absolute;
    left: 10px;
    top: 6px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-shadow: 0 0 0 3px var(--ifm-color-primary);
    background: var(--ifm-color-primary);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 10px;
    font-weight: bold;
    line-height: 1;
    text-align: center;
  }
  
  .timeline-marker.v1-3 {
    box-shadow: 0 0 0 3px var(--ifm-color-primary);
    background: var(--ifm-color-primary);
  }
  
  .timeline-marker.v2-0 {
    box-shadow: 0 0 0 3px var(--ifm-color-primary);
    background: var(--ifm-color-primary);
  }
  
  .timeline-marker.future {
    box-shadow: 0 0 0 3px var(--ifm-color-primary);
    background: var(--ifm-color-primary);
    color: white;
  }
  
  .timeline-item.future .timeline-content {
    background: var(--ifm-color-emphasis-100);
    border: 1px dashed var(--ifm-color-emphasis-300);
    opacity: 0.8;
  }
  
  .timeline-item.future .timeline-content h4 {
    color: var(--ifm-color-emphasis-600);
  }
  
  .timeline-content {
    background: var(--ifm-card-background-color);
    border: 1px solid var(--ifm-color-emphasis-300);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .timeline-content h4 {
    margin: 0 0 0.5rem 0;
    color: var(--ifm-color-primary);
    font-size: 1.2rem;
  }
  
  .milestone-date {
    margin: 0 0 1rem 0;
    color: var(--ifm-color-emphasis-600);
    font-size: 0.9rem;
    font-style: italic;
  }
  
  .timeline-content ul {
    margin: 0;
    padding-left: 1.2rem;
  }
  
  .timeline-content li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }
  
  @media (max-width: 768px) {
    .timeline::before {
      left: 15px;
    }
    
    .timeline-item {
      padding-left: 50px;
    }
    
    .timeline-marker {
      left: 5px;
      width: 22px;
      height: 22px;
      font-size: 9px;
    }
  }
`}</style>

---

*This roadmap is a living document and may be updated based on community feedback and development priorities.*
