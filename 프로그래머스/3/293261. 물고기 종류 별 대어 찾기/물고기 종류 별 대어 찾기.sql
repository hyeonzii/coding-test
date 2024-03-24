with top as(
    select fish_type, MAX(length) from fish_info group by fish_type
)

select FI.id, fish_name, FI.length from fish_info FI join fish_name_info using(fish_type)
where (FI.fish_type,FI.length) in (select * from top)
order by FI.id