# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2025-12-15
### Added
- Display language label (from `data-lang`) on code box header
- Improved layout and styling for long file names to prevent button wrapping
- Highlight line range support with better styling (`data-lines="start-end"`)
- Added hover effect on action buttons
- Enhanced copy button feedback ("Copied!" text)
- Minor UI fixes for dots and header alignment

### Changed
- Refined CSS for VS Code style dark theme
- Improved syntax highlighting regex for safer matching

### Fixed
- Fixed line number alignment issue with code lines
- Fixed dot indicator style breaking on small widths

## [1.0.1] - 2025-12-15
### Added
- Download button to save code as text file
- Filename from `data-file` attribute for download and display

### Fixed
- Minor style fixes and button spacing improvements

## [1.0.0] - 2025-12-14
### Added
- Initial release of BroCodeBox
- Basic syntax highlighting for JavaScript
- Line numbers with optional highlight lines
- Copy button for easy code copying
- VS Code style dark theme
- Self-contained single JS file with injected CSS
