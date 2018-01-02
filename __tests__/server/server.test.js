import React from 'react';
import ReactDOM from 'react-dom';
import ReactServer from 'react-dom/server';
import Helmet from '../../src';
import Provider from '../../src/Provider';

Helmet.defaultProps.defer = false;

const mount = document.getElementById('mount');

const render = (node, context = {}) => {
  ReactDOM.render(<Provider context={context}>{node}</Provider>, mount);
};

beforeAll(() => {
  Provider.canUseDOM = false;
});

afterAll(() => {
  Provider.canUseDOM = true;
});

const isArray = {
  asymmetricMatch: actual => Array.isArray(actual),
};

describe('server', () => {
  describe('API', () => {
    it('rewind() provides a fallback object for empty Helmet state', () => {
      const context = {};
      render(<div />, context);

      const head = context.helmet;

      expect(head.htmlAttributes).toBeDefined();
      expect(head.htmlAttributes.toString).toBeDefined();
      expect(head.htmlAttributes.toString()).toEqual('');
      expect(head.htmlAttributes.toComponent).toBeDefined();
      expect(head.htmlAttributes.toComponent()).toEqual({});

      expect(head.title).toBeDefined();
      expect(head.title.toString).toBeDefined();
      expect(head.title.toString()).toMatchSnapshot();
      expect(head.title.toComponent).toBeDefined();

      const markup = ReactServer.renderToStaticMarkup(head.title.toComponent());

      expect(markup).toMatchSnapshot();

      expect(head.base).toBeDefined();
      expect(head.base.toString).toBeDefined();
      expect(head.base.toString()).toEqual('');
      expect(head.base.toComponent).toBeDefined();
      const baseComponent = head.base.toComponent();
      expect(baseComponent).toEqual(isArray);
      expect(baseComponent).toHaveLength(0);

      expect(head.meta).toBeDefined();
      expect(head.meta.toString).toBeDefined();
      expect(head.meta.toString()).toEqual('');
      expect(head.meta.toComponent).toBeDefined();
      const metaComponent = head.meta.toComponent();
      expect(metaComponent).toEqual(isArray);
      expect(metaComponent).toHaveLength(0);

      expect(head.link).toBeDefined();
      expect(head.link.toString).toBeDefined();
      expect(head.link.toString()).toEqual('');
      expect(head.link.toComponent).toBeDefined();
      const linkComponent = head.link.toComponent();
      expect(linkComponent).toEqual(isArray);
      expect(linkComponent).toHaveLength(0);

      expect(head.script).toBeDefined();
      expect(head.script.toString).toBeDefined();
      expect(head.script.toString()).toEqual('');
      expect(head.script.toComponent).toBeDefined();
      const scriptComponent = head.script.toComponent();
      expect(scriptComponent).toEqual(isArray);
      expect(scriptComponent).toHaveLength(0);

      expect(head.noscript).toBeDefined();
      expect(head.noscript.toString).toBeDefined();
      expect(head.noscript.toString()).toEqual('');
      expect(head.noscript.toComponent).toBeDefined();
      const noscriptComponent = head.noscript.toComponent();
      expect(noscriptComponent).toEqual(isArray);
      expect(noscriptComponent).toHaveLength(0);

      expect(head.style).toBeDefined();
      expect(head.style.toString).toBeDefined();
      expect(head.style.toString()).toEqual('');
      expect(head.style.toComponent).toBeDefined();
      const styleComponent = head.style.toComponent();
      expect(styleComponent).toEqual(isArray);
      expect(styleComponent).toHaveLength(0);
    });

    it('does not render undefined attribute values', () => {
      const context = {};
      render(
        <Helmet
          script={[
            {
              src: 'foo.js',
              async: undefined,
            },
          ]}
        />,
        context
      );

      const { script } = context.helmet;
      expect(script.toString()).toMatchSnapshot();
    });
  });

  describe('Declarative API', () => {
    it('provides initial values if no state is found', () => {
      const context = {};
      render(<div />, context);
      const head = context.helmet;

      expect(head.meta).toBeDefined();
      expect(head.meta.toString).toBeDefined();

      expect(head.meta.toString()).toEqual('');
    });

    it('rewind() provides a fallback object for empty Helmet state', () => {
      const context = {};
      render(<div />, context);

      const head = context.helmet;

      expect(head.htmlAttributes).toBeDefined();
      expect(head.htmlAttributes.toString).toBeDefined();
      expect(head.htmlAttributes.toString()).toEqual('');
      expect(head.htmlAttributes.toComponent).toBeDefined();
      expect(head.htmlAttributes.toComponent()).toEqual({});

      expect(head.title).toBeDefined();
      expect(head.title.toString).toBeDefined();
      expect(head.title.toString()).toMatchSnapshot();
      expect(head.title.toComponent).toBeDefined();

      const markup = ReactServer.renderToStaticMarkup(head.title.toComponent());

      expect(markup).toMatchSnapshot();

      expect(head.base).toBeDefined();
      expect(head.base.toString).toBeDefined();
      expect(head.base.toString()).toEqual('');
      expect(head.base.toComponent).toBeDefined();
      const baseComponent = head.base.toComponent();
      expect(baseComponent).toEqual(isArray);
      expect(baseComponent).toHaveLength(0);

      expect(head.meta).toBeDefined();
      expect(head.meta.toString).toBeDefined();
      expect(head.meta.toString()).toEqual('');
      expect(head.meta.toComponent).toBeDefined();
      const metaComponent = head.meta.toComponent();
      expect(metaComponent).toEqual(isArray);
      expect(metaComponent).toHaveLength(0);

      expect(head.link).toBeDefined();
      expect(head.link.toString).toBeDefined();
      expect(head.link.toString()).toEqual('');
      expect(head.link.toComponent).toBeDefined();
      const linkComponent = head.link.toComponent();
      expect(linkComponent).toEqual(isArray);
      expect(linkComponent).toHaveLength(0);

      expect(head.script).toBeDefined();
      expect(head.script.toString).toBeDefined();
      expect(head.script.toString()).toEqual('');
      expect(head.script.toComponent).toBeDefined();
      const scriptComponent = head.script.toComponent();
      expect(scriptComponent).toEqual(isArray);
      expect(scriptComponent).toHaveLength(0);

      expect(head.noscript).toBeDefined();
      expect(head.noscript.toString).toBeDefined();
      expect(head.noscript.toString()).toEqual('');
      expect(head.noscript.toComponent).toBeDefined();
      const noscriptComponent = head.noscript.toComponent();
      expect(noscriptComponent).toEqual(isArray);
      expect(noscriptComponent).toHaveLength(0);

      expect(head.style).toBeDefined();
      expect(head.style.toString).toBeDefined();
      expect(head.style.toString()).toEqual('');
      expect(head.style.toComponent).toBeDefined();
      const styleComponent = head.style.toComponent();
      expect(styleComponent).toEqual(isArray);
      expect(styleComponent).toHaveLength(0);
    });

    it('does not render undefined attribute values', () => {
      const context = {};
      render(
        <Helmet>
          <script src="foo.js" async={undefined} />
        </Helmet>,
        context
      );

      const { script } = context.helmet;
      expect(script.toString()).toMatchSnapshot();
    });
  });
});
