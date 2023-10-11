<?php
    $result = $GLOBALS["result"];
?>

<tr class="results-table">
    <td><?php echo $result[0] ?></td>
    <td><?php echo $result[1] ?></td>
    <td><?php echo $result[2] ?></td>
    <?php echo $result[3] ? "<td style='color: lightgreen'>In area</td>\n" : "<td style='color: indianred'>Outside area</td>\n"; ?>
    <td><?php echo $result[4] ?></td>
    <td><?php echo $result[5] ?> с</td>
</tr>