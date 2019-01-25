# An example of Ionic v4 with a mockup of dynamic theme switcher

## Description

1. The service `SwitchThemeService` is use to switch between theme and propagate it

2. In `app.component.ts` I subscribe to the service in order to add or remove an attribute on the root of the DOM aka on the `<html/>` tag aka on the `document`

3. In `variable.scss` I define different root styles according the theme and the attribute applied to the root of the DOM

4. I also added a `theme.scss` to display how to add extra dynamic styles and display two options

a. Declare a style for an element for each theme attributes

b. Declare a single style for an element and add a new related variable in `variable.scss`
