@echo off
echo WINDOWS HAS DETECTED A VIRUS, WOULD YOU LIKE TO TERMINATE?
echo -
echo PROCEED WITH VIRUS TERMINATION(Y/N)
set/p "cho=>"
if %cho%==Y goto forward
if %cho%==y goto forward
if %cho%==n goto Shutdown1
if %cho%==N goto Shutdown1
:forward
echo VIRUS HAS BEEN DELETED
Pause
echo PLEASE ALLOW WINDOWS TO PREFORM A SAFETY CHECK
Pause
echo SYSTEM CHECK
echo HARD DRIVE - FAILED
echo -
echo RAM - FAILED
echo -
echo DISK DRIVE - FAILED
echo -
echo CONNECTION - FAILED
echo -
echo WINDOWS SUGGESTS YOU DELETE ALL FILES TO RESUME(Y/N)
set/p "cho=>"
if %cho%==Y goto Sucess
if %cho%==y goto Sucess
if %cho%==n goto Shutdown2
if %cho%==N goto Shutdown2
:Sucess
echo WINDOWS HAS DELETED ALL FILES
echo -
echo PLEASE ALLOW WINDOWS TO PREFORM A SAFETY CHECK
Pause
echo SYSTEM CHECK
echo HARD DRIVE - FAILED
echo -
echo RAM - FAILED
echo -
echo DISK DRIVE - FAILED
echo -
echo CONNECTION - FAILED
echo -
echo WINDOWS IS SHUTTING DOWN IN 20 SECONDS TO PROTECT FROM DAMAGE
goto Shutdown3
:Shutdown3
shutdown -r -t 20 -c "APRIL FOOLS! HAHAHAHAHAHA"
:Shutdown1
shutdown -s -f -t 60 -c "Windows is shutting down to prevent any further damage"
:Shutdown2
shutdown -s -f -t 60 -c "Windows is shutting down to prevent any further damage"
