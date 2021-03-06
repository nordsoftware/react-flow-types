// @flow
import * as React from 'react';
import type {
  HigherOrderComponent,
} from '../../index';

type RequiredProps = {};

type ProvidedProps = {foo: number};

const injectFooFactoryFunctionalComponent: HigherOrderComponent<RequiredProps, ProvidedProps> = (C: any): any => {
  return (props: RequiredProps) => <C {...props} foo={3} />;
};

export default injectFooFactoryFunctionalComponent;
