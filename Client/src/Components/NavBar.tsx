import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import Main from './Main';

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent() {
  return (
    <Main/>
  );
}

interface DemoProps {
  window?: () => Window;
}

export default function DashboardLayoutNavigationLinks(props: DemoProps) {
  const { window } = props;
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={[
        {
          segment: 'home',
          title: 'ראשי',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'organization',
          title: 'ארגוני טרור',
          icon: <DescriptionIcon />,
        },
        {
            segment: 'countries',
            title: 'מדינות',
            icon: <DescriptionIcon />,
        },
        {
            segment: 'types',
            title: 'סוגי תקיפות',
            icon: <DescriptionIcon />,
        },
        {
            segment: 'years',
            title: 'שנים',
            icon: <DescriptionIcon />,
        },
      ]}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent />
      </DashboardLayout>
    </AppProvider>
  );
}
