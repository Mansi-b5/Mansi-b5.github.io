[string] $processName = "Notepad";
KillThatProcess($processName)
Bamboozle

Function KillThatProcess([string] $processName)
{
    $process = Get-Process $processName
    $counter = $process.Count

    [string] $input = Read-Host-Prompt "There are $counter processes with the name $processName, proceed ? Y/N"
    if($input -eq 'Y'-or $input -eq 'y')
    {
       Get-Process - $processName | Stop-Process 
    }
    else
    {
        Write-Host "Invalid input !" 
    }
}

Function Bamboozle()
{
    Set-Location -path  /Users/Mansi/Documents
    $Letter = -join (65..90) + (97..122) | Get-Random -Count 1 | % {[char]$_} 
    Write-Host -BackgroundColor red -ForegroundColor Yellow  " /////////////////////////////
                                                               //YOU HAVE THE CORONA VIRUS//
                                                               /////////////////////////////" 
    Write-Host "You have chosen the letter $letter"
    [string] $listOfFiles = Get-ChildItem -Path /Users/Mansi/Documents/*  -Include $letter* |Remove-Item -whatif
    if($listOfFiles -eq $null
   {
       Write-Host "You have no files with that letter" 
   }
}
