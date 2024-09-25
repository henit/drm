'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import bemClass from '@henit/bem-class';
import { type DataState, useDataState } from 'src/data-state';
// import { DataSourceContext } from './DataSourceContext';
//import { ReactComponent as ReactLogo } from './spinner.svg';
import spinner from './spinner.svg';
import './Loading.scss';

const block = bemClass('loading');

export interface LoadingProps {
  className?: string;
  loading?: boolean;
  state?: DataState;
  children?: React.ReactNode;
}

export function Loading({ className, loading, state, children }: LoadingProps) {
  //const dataSource = useContext(DataSourceContext);
  //const isLoading = loading ?? state?.loading ?? dataSource?.state.loading;
  const dataSource = useDataState();
  const isLoading = loading ?? state?.loading ?? dataSource?.loading;

  if (isLoading) {
    const cn = block([className]);

    return (
      <div className={cn}>
        <Image alt="spinner" className={block('spinner')} src={spinner} />

        <div className={block('contents')}>{children}</div>
      </div>
    );
  }

  return children;
}
