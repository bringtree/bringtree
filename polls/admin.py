from django.contrib import admin

from .models import Question, Choice


# admin.site.register(Question)


# Register your models here.

#改用TabularInline 不用StackedInline 来使得页面 更加紧凑
class ChoiceInline(admin.TabularInline):
    model = Choice
    #每次打开admin页面中的admin中choice 的时候 会自动多出三个选项来选择
    extra = 3


class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['question_text']}),
        ('Date information', {'fields': ['pub_date'], 'classes': ['collapse']}),
    ]
    inlines = [ChoiceInline]
    #pills 中的questions页面中显示的信息
    list_display = ('question_text','pub_date','was_published_recently')
    list_filter = ['pub_date']
    search_fields = ['question_text']


admin.site.register(Question, QuestionAdmin)
admin.site.register(Choice)
