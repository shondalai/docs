import React from 'react';
import { Icon } from '@iconify/react';

interface DocIconProps {
  icon: string;
  size?: number;
  color?: string;
  className?: string;
}

export const DocIcon: React.FC<DocIconProps> = ({
  icon,
  size = 20,
  color,
  className = ''
}) => {
  return (
    <Icon
      icon={icon}
      width={size}
      height={size}
      color={color}
      className={`doc-icon ${className}`}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: '0.5rem'
      }}
    />
  );
};

// Predefined icon mappings for common use cases
export const DocIcons = {
  rocket: 'lucide:rocket',
  target: 'lucide:target',
  book: 'lucide:book-open',
  sparkles: 'lucide:sparkles',
  building: 'lucide:building-2',
  form: 'lucide:file-text',
  analytics: 'lucide:bar-chart-3',
  integration: 'lucide:plug',
  security: 'lucide:shield',
  mail: 'lucide:mail',
  settings: 'lucide:settings',
  help: 'lucide:help-circle',
  check: 'lucide:check-circle',
  info: 'lucide:info',
  warning: 'lucide:alert-triangle',
  error: 'lucide:x-circle',
  lightbulb: 'lucide:lightbulb',
  search: 'lucide:search',
  package: 'lucide:package',
  layers: 'lucide:layers',
  code: 'lucide:code',
  database: 'lucide:database',
  cloud: 'lucide:cloud',
  link: 'lucide:link',
  users: 'lucide:users',
  globe: 'lucide:globe',
  palette: 'lucide:palette',
  zap: 'lucide:zap',
};

export default DocIcon;
