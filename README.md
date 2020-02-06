# stylus-workplace

a project using gulp that makes it easy to generate css using stylus. generates dev,prod,vendor and bundle files.


## Steps
   
   - clone the repo
   - run **npm install --global gulp-cli**
   - run **npm install**
   - run **gulp** or **npm run start**
   - you can change **stylus/** contents now
   - your bundle file **styles.min.css** is generated in `./final`
   
   
## Test
   
   - requires jest
   - run **npm test**
   
## Notes
   
> you can find dev css with sourcemaps in `./css`, prod compressed versions in `./compressed` and vendor prefixed prod compressed versions in `./vendor`, but what you usually should do, is include the `./final/styles.min.css` in your html, it will contain all your styles

> uses gulp-cli v2 and gulp v4

> running the test will produce sample results that will replace your produced css

## Use cases

 you might use this as a playground to learn Stylus or as a tool to safely generate your css outside your projects.
   
