// CLAIM_LINE_ITEM.js

window.CLAIM_LINE_ITEM = {
  "tables": {
    "CLAIM_LINE_ITEM": {
      "columns": {
        "CLAIM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CLAIM",
          "info": "The claim GID. "
        },
        "LINE_ITEM_SEQ_NO": {
          "type": "NUMBER(9)",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number to keep claim line items unique; actual line items should start with sequence number 1; 0 is reserved to attach costs that relate to the claim as a whole. "
        },
        "ORDER_RELEASE_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE_LINE",
          "info": "The GID for the order release (if applicable) to which this claim line item applies. "
        },
        "SERIAL_NUMBER": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Serial number for the claim line item. "
        },
        "DAMAGE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DAMAGE_TYPE",
          "info": "Type of damage; these values are user defined. "
        },
        "DAMAGED_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Weight of damaged portion. "
        },
        "DAMAGED_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "UOM qualifier for damaged weight. "
        },
        "DAMAGED_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Damaged weight in base UOM. "
        },
        "DAMAGED_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Volume of damaged portion. "
        },
        "DAMAGED_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "UOM qualifier for damaged volume. "
        },
        "DAMAGED_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Damaged volume in base UOM. "
        },
        "DAMAGED_QUANTITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Quantity of damaged goods. "
        },
        "DAMAGED_FRACTION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Percentage of damage. "
        },
        "ORIGINAL_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total or original weight for the line item (undamaged + damaged goods). "
        },
        "ORIGINAL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "UOM qualifier for original weight. "
        },
        "ORIGINAL_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Original weight in base UOM. "
        },
        "ORIGINAL_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total or original volume for the line item (undamaged + damaged goods). "
        },
        "ORIGINAL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "UOM qualifier for original volume. "
        },
        "ORIGINAL_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Original volume in base UOM. "
        },
        "ORIGINAL_QUANTITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total or original quantity for the line item (undamaged + damaged goods). "
        },
        "NEW_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "New weight after reconditioning activities. "
        },
        "NEW_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "UOM qualifier for new weight. "
        },
        "NEW_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "New weight in base UOM. "
        },
        "NEW_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "New volume after reconditioning activities "
        },
        "NEW_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "UOM qualifier for new volume. "
        },
        "NEW_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "New volume in base UOM. "
        },
        "NEW_QUANTITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "New quantity after reconditioning activities. "
        },
        "REMOVED_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Weight of portion that was removed as part of reconditioning. "
        },
        "REMOVED_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "UOM qualifier for removed weight. "
        },
        "REMOVED_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Removed weight in base UOM. "
        },
        "REMOVED_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Volume of portion that was removed as part of reconditioning. "
        },
        "REMOVED_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "UOM qualifier for removed volume. "
        },
        "REMOVED_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Removed volume in base UOM. "
        },
        "REMOVED_QUANTITY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Quantity of goods that were removed as part of reconditioning. "
        },
        "ORIG_CYLINDER_DIAM": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "For cylindrical objects, the original diameter prior to damage. "
        },
        "ORIG_CYLINDER_DIAM_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "UOM qualifier for original cylinder diameter. "
        },
        "ORIG_CYLINDER_DIAM_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Original cylinder diameter in base UOM. "
        },
        "ORIG_CYL_CORE_DIAM": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "For cylindrical objects, the hollow core diameter that should not be counted as damaged product in damage calculations. "
        },
        "ORIG_CYL_CORE_DIAM_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "UOM qualifier for original cylinder core diameter. "
        },
        "ORIG_CYL_CORE_DIAM_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Original cylinder core diameter in base UOM. "
        },
        "REMOVED_CYL_DEPTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "For cylindrical objects, the depth from the outer edge of the cylinder that was removed. "
        },
        "REMOVED_CYL_DEPTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "UOM qualifier for removed cylinder depth. "
        },
        "REMOVED_CYL_DEPTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Removed cylinder depth in base UOM. "
        },
        "NEW_CYLINDER_DIAM": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "For cylindrical objects, the new diameter of the object. "
        },
        "NEW_CYLINDER_DIAM_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "UOM qualifier for new cylinder diameter. "
        },
        "NEW_CYLINDER_DIAM_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "New cylinder diameter in base UOM. "
        },
        "REMOVED_FRACTION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Percentage of goods removed as part of reconditioning. "
        },
        "DECLARED_VALUE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Declared value of the entire amount of goods represented on the line; the system will populate this when creating a claim from objects in GC3 if the declared value is available. "
        },
        "DECLARED_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for currency for the declared value currency. "
        },
        "DECLARED_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Declared value amount in base currency. "
        },
        "PACKAGE_STATUS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CLAIM_LINE_ITEM_PACKAGE_STATUS",
          "info": "Indicates the status of packages on the claim line item. "
        },
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "Transport handling unit for the claim line item. "
        },
        "PRICE_PER_UNIT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Sales value of goods per unit specified (for a $10/lb. value, this field represents the $10 part); used in the damage value calculation. "
        },
        "PRICE_PER_UNIT_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "Currency for the price per unit value. "
        },
        "PRICE_PER_UNIT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Base amount for the price per unit value. "
        },
        "PRICE_PER_UNIT_UOM_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "UOM type of the unit for which sales value is defined such as 'weight' or 'volume'; used in the damage value calculation. "
        },
        "PRICE_PER_UNIT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "UOM for the per value for size of loss (for a $10/lb. value, this field represents the 'lb.' part); used in the damage value calculation. "
        },
        "SIZE_OF_LOSS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The calculated total of all claim line item costs for this claim line item. "
        },
        "SIZE_OF_LOSS_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "Currency for the system calculated total of all claim line item costs for this claim line item. "
        },
        "SIZE_OF_LOSS_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Base amount for the system calculated total of all claim line item costs for this claim line item. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": [
        "CLAIM_LINE_ITEM_COST",
        "CLAIM_LINE_ITEM_REFNUM"
      ]
    }
  }
};
