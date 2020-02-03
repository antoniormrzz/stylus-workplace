const { exec } = require('child_process');
const validateCss = require('css-validator');
const fs = require('fs');
const path = require('path');

describe('css validation', () => {
  beforeAll(done => {
    exec('gulp defaultTask', (err, stdout, stderr) => {
      if (err || stderr) {
        done.fail(new Error('gulp task failed'));
        done();
      } else {
        done();
      }
    });
  });
  it('produces valid production css', done => {
    const prodCSS = fs.readFileSync(path.resolve(__dirname, '../compressed/my-styles.css'), { encoding: 'utf8' });
    validateCss({ text: prodCSS }, function(err, data) {
      expect(data.validity).toBe(true);
      expect(data.errors).toEqual([]);
      expect(data.warnings).toEqual([]);
      done();
    });
  });
  it('produces valid development css', done => {
    const devCSS = fs.readFileSync(path.resolve(__dirname, '../css/my-styles.css'), { encoding: 'utf8' });
    validateCss({ text: devCSS }, function(err, data) {
      expect(data.validity).toBe(true);
      expect(data.errors).toEqual([]);
      expect(data.warnings).toEqual([]);
      done();
    });
  });
});
