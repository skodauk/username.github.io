$("[data-bg-image]").each(function(){var t=$(this).attr("data-bg-image");$(this).css("background-image","url("+t+")")}),$("[data-bg-image-dark]").each(function(){var t=$(this).attr("data-bg-image-dark");$(this).css("background-image","linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("+t+")")}),$(document).ready(function(){if(0!=$(".humanise-tabs__tab-select--tab").length){var t=$(".humanise-tabs__tab-select--tab").first().position().left;$(".humanise-tabs__tab-select--nav").css("left",t+"px"),$(".humanise-tabs__tab-select--tab").click(function(){$("li[role='tab']").attr("aria-selected","false"),$(this).attr("aria-selected","true");var t=$(this).position().left;$(".humanise-tabs__tab-select--nav").css("left",t+"px");var a=$(this).attr("aria-controls"),e=$("#"+a);$("div[role='tabpanel']").attr("aria-hidden","true"),e.attr("aria-hidden","false")}),$("li[role='tab']").keydown(function(t){13==t.which&&$(this).click()}),$("li[role='tab']").keydown(function(t){if((39==t.which||37==t.which)&&"true"==$(this).attr("aria-selected")){$("li[aria-selected='false']").attr("aria-selected","true").focus(),$(this).attr("aria-selected","false");var a=$("li[aria-selected='true']").attr("aria-controls"),e=$("#"+a);$("div[role='tabpanel']").attr("aria-hidden","true"),e.attr("aria-hidden","false")}})}}),$(document).ready(function(){if(0!=$(".humanise-tabs__tab-select--tab").length){var t=$(".humanise-tabs__tab-select--tab").first().position().left;$(".humanise-tabs__tab-select--nav").css("left",t+"px"),$(".humanise-tabs__tab-select--tab").click(function(){$("li[role='tab']").attr("aria-selected","false"),$(this).attr("aria-selected","true");var t=$(this).position().left;$(".humanise-tabs__tab-select--nav").css("left",t+"px");var a=$(this).attr("aria-controls"),e=$("#"+a);$("div[role='tabpanel']").attr("aria-hidden","true"),e.attr("aria-hidden","false")}),$("li[role='tab']").keydown(function(t){13==t.which&&$(this).click()}),$("li[role='tab']").keydown(function(t){if((39==t.which||37==t.which)&&"true"==$(this).attr("aria-selected")){$("li[aria-selected='false']").attr("aria-selected","true").focus(),$(this).attr("aria-selected","false");var a=$("li[aria-selected='true']").attr("aria-controls"),e=$("#"+a);$("div[role='tabpanel']").attr("aria-hidden","true"),e.attr("aria-hidden","false")}})}}),$(document).ready(function(){if(0!=$(".humanise-tabs__tab-select--tab").length){var t=$(".humanise-tabs__tab-select--tab").first().position().left;$(".humanise-tabs__tab-select--nav").css("left",t+"px"),$(".humanise-tabs__tab-select--tab").click(function(){$("li[role='tab']").attr("aria-selected","false"),$(this).attr("aria-selected","true");var t=$(this).position().left;$(".humanise-tabs__tab-select--nav").css("left",t+"px");var a=$(this).attr("aria-controls"),e=$("#"+a);$("div[role='tabpanel']").attr("aria-hidden","true"),e.attr("aria-hidden","false")}),$("li[role='tab']").keydown(function(t){13==t.which&&$(this).click()}),$("li[role='tab']").keydown(function(t){if((39==t.which||37==t.which)&&"true"==$(this).attr("aria-selected")){$("li[aria-selected='false']").attr("aria-selected","true").focus(),$(this).attr("aria-selected","false");var a=$("li[aria-selected='true']").attr("aria-controls"),e=$("#"+a);$("div[role='tabpanel']").attr("aria-hidden","true"),e.attr("aria-hidden","false")}})}});