/*
    Copyright 2014-2020 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
describe('copyright atom', () => {
    it('should generate nothing if there is no copyright owner', () => {
        const text = helpers.render('copyright', {});

        expect(text).toBe('');
    });

    it('should show the copyright owner', () => {
        const text = helpers.render('copyright', {
            copyright: 'John Doe'
        });

        expect(text).toContain('<dd>John Doe</dd>');
    });

    it('should link to the copyright owner when appropriate', () => {
        const text = helpers.render('copyright', {
            copyright: 'http://example.org'
        });

        expect(text).toContain('<a href="http://example.org">http://example.org</a>');
    });
});
