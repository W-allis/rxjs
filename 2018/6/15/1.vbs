Foo()

Function Foo()
	Dim str
	str = InputBox("快说你是猪","测试")
	If str = "" Then
		MsgBox("你还没说你是猪")
		Foo()
	ElseIf str = "我是猪" Then
		MsgBox("知道就好")
	Else
		MsgBox("口令不正确")
		Foo()
	End If
End Function	