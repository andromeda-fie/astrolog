{
  outputs = {
    self,
    nixpkgs,
  }: {
    devShells.aarch64-darwin.default = let
      pkgs = import nixpkgs {system = "aarch64-darwin";};
      inherit (pkgs) mkShell lib stdenv darwin nodejs postgresql sqlite;
    in
      mkShell {
        name = "astrolog";
        packages =
          [nodejs postgresql sqlite]
          ++ lib.optional stdenv.isDarwin [
            darwin.apple_sdk.frameworks.CoreServices
            darwin.apple_sdk.frameworks.CoreFoundation
          ];
      };
  };
}
