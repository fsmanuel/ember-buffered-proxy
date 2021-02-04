import BufferedProxy from 'ember-buffered-proxy/proxy';
import BufferedMixin from 'ember-buffered-proxy/mixin';
import { module, test } from 'qunit';

module('ember-buffered-proxy/proxy', function () {
  test('exists', (assert) => {
    assert.ok(BufferedProxy);
  });

  test('that appears correct', (assert) => {
    assert.ok(BufferedMixin.detect(BufferedProxy.create()));
  });
});
