Foo()

Function Foo()
	Dim str
	str = InputBox("��˵������","����")
	If str = "" Then
		MsgBox("�㻹û˵������")
		Foo()
	ElseIf str = "������" Then
		MsgBox("֪���ͺ�")
	Else
		MsgBox("�����ȷ")
		Foo()
	End If
End Function	