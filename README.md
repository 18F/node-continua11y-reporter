# node-continua11y-acceptance

[![Build Status](https://travis-ci.org/18F/node-continua11y-reports.svg?branch=master)](https://travis-ci.org/18F/node-continua11y-reports) [![Test Coverage](https://codeclimate.com/github/18F/node-continua11y-reports/badges/coverage.svg)](https://codeclimate.com/github/18F/node-continua11y-reports/coverage) [![Code Climate](https://codeclimate.com/github/18F/node-continua11y-reports/badges/gpa.svg)](https://codeclimate.com/github/18F/node-continua11y-reports)

Accessibility is important. This is a tool in a series of accessibility
tools designed to be part of your build system, keeping you informed
about the accessibility of your site. This tool converts `pa11y` json
page formats to a `continua11y` format. If need arise from the use of
other great packages, we will create other converters here!

## Usage

This tool is meant to be used programmatically to generate a directory
or json reports, one per page and size.

-- more coming soon ---

### Configuration

-- more coming soon ---


### Reporting

The library by default writes reports about each url in each size that
it runs to `/accessibility`. Reporting can be turned off in
configration.

You will likely want to update your `.gitignore` to ignore accessibility
reports. These are effemeral artifacts that should not be
part of the repository.

To send the report to an alternate directory use this configuration:

    {
      report: '/my-special/directory'
    }

It makes sense to clear the report directory before generating new
reports.

-- more coming soon --

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.

