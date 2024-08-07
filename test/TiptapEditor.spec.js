import { mount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import TiptapEditor from '../src/tiptap-editor.vue';

let propsData;

beforeEach(async () => {
    propsData = {
        maxCharacterCount: 200,
        height: '200px',
        showMenu: true,
        warnings: [
            {
                value: 'red',
                message: 'did you mean...',
                options: ['read', 'reed'],
            },
            {
                value: 'blue',
                message: 'blue messsage',
                overrideClass: 'underline-blue',
            },
        ],
        value: 'Roses are red. Violets are blue.',
    };
});

describe('tiptap-editor.vue', () => {
    it('should show menu', async () => {
        const wrapper = await mount(TiptapEditor, { propsData });
        const menubar = wrapper.find('.menubar');
        expect(menubar.exists()).toBe(true);
    });

    it('should hide menu', async () => {
        propsData.showMenu = false;
        const wrapper = await mount(TiptapEditor, {
            propsData: propsData,
        });
        const menubar = wrapper.find('.menubar');
        expect(menubar.exists()).toBeFalsy;
        propsData.showMenu = true;
    });

    it('should underline words', async () => {
        const wrapper = await mount(TiptapEditor, { propsData });

        await flushPromises();

        const redUnderline = wrapper.find('.underline-red');
        const blueUnderline = wrapper.find('.underline-blue');
        expect(redUnderline.exists()).toBeTruthy;
        expect(blueUnderline.exists()).toBeFalsy;
    });

    it('should render correct popup suggestions', async () => {
        propsData.value = 'red';
        const wrapper = await mount(TiptapEditor, { propsData });

        await flushPromises();
        await wrapper.find('.tiptap').trigger('click');

        const errorList = wrapper.find('.error-list');
        expect(errorList.text()).toEqual('did you mean...readreed');
    });

    it('should display correct word count', async () => {
        propsData.maxCharacterCount = 100;
        const wrapper = await mount(TiptapEditor, { propsData });
        await flushPromises();
        const characterCount = wrapper.find('.character-count__text');
        expect(characterCount.text()).toBe('32 / 100 characters');
    });
});
