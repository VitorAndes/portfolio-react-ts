{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs
    pkgs.pnpm  
  ];

  shellHook = ''
    export PATH=$PATH:${pkgs.nodejs}/bin
    export PATH=$PATH:${pkgs.pnpm}/bin  
  '';
}