import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps{
    children: ReactElement
    shouldMatchExcatHref: boolean
}

export function ActiveLink({shouldMatchExcatHref = false,children,...props}:ActiveLinkProps){
    let isActive = false
    const {asPath} = useRouter()

    if(shouldMatchExcatHref && (asPath === props.href || asPath === props.as)){
        isActive = true
    }

    if(!shouldMatchExcatHref && (asPath.startsWith(String(props.href)) || asPath.startsWith(String(props.as))) ) {
        isActive = true
    }

    return(
        <Link {...props}>
        {cloneElement(children,{
            color: isActive ? 'pink.400' : 'gray.50'
        })}
        </Link>
    )
}