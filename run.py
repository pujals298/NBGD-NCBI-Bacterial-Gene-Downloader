import subprocess
import sys
from pathlib import Path
import shlex

STEP1 = Path("1 SEARCH GENES") / "download.py"
STEP2 = Path("2 ALN_TRIM_TREE") / "aln_trim_tree.py"

def run(cmd: list[str]) -> None:
    cmd = [str(c) for c in cmd]
    print("\nRunning:", cmd)
    subprocess.run(cmd, check=True)

def main():
    print("=== Pipeline runner ===")
    print("1) Step 1 (download/extract sequences)")
    print("2) Step 2 (align/trim/tree)")
    print("3) Step 1 + Step 2")
    choice = input("Choose an option [1/2/3]: ").strip()

    if choice not in {"1", "2", "3"}:
        print("Invalid option")
        return

    if choice in {"1", "3"}:
        if not STEP1.exists():
            print(f"Step 1 script not found: {STEP1}")
            return
        run([sys.executable, STEP1])

    if choice in {"2", "3"}:
        if not STEP2.exists():
            print(f"Step 2 script not found: {STEP2}")
            return

        fasta = input("\nName of the input FASTA for Step 2: ").strip()
        if not fasta:
            print("No FASTA provided.")
            return

        print("\n(Optional) Advanced Step 2 arguments:")
        print("  Examples:")
        print("    --clipkit-mode X --outgroup X -muscle-exe /path/to/muscle")
        print("  Leave blank to use defaults.")
        print("  (Tip: type -h to see all Step 2 options.)") 
        extra = input("Extra args: ").strip()
        extra_args = shlex.split(extra) if extra else []

        if extra_args in (["-h"], ["--help"]):
            run([sys.executable, STEP2, *extra_args])
            return

        cmd = [sys.executable, STEP2, "--input", fasta, *extra_args]
        run(cmd)

    print("\nDone.")

if __name__ == "__main__":
    main()