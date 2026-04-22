// PACKAGED_ITEM.js

window.PACKAGED_ITEM = {
  "tables": {
    "PACKAGED_ITEM": {
      "columns": {
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the packaged item."
},
        "PACKAGED_ITEM_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the packaged item."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "Packaged item free form text field for the description. For example, a case of soda."
},
        "ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ITEM",
          "info": "The GID for the item. Product without the packaging."
},
        "HAZMAT_PACKAGE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "HAZMAT_PACKAGE_TYPE",
          "info": "The GID for the hazmat package type. This field can be used to give the packaged item a special description. If you are defining a hazardous material, use this field to describe it."
},
        "PACKAGING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The GID for the packaging unit."
},
        "PACKAGE_SHIP_UNIT_WEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The weight of the ship unit."
},
        "PACKAGE_SHIP_UNIT_WEIGHT_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The weight unit of measure related to the  packaged ship unit weight."
},
        "PACKAGE_SHIP_UNIT_WEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Package ship unit weight in base units."
},
        "INNER_PACK_COUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The count for the number of items in the inner pack."
},
        "INNER_PACK_PACKAGING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The packaging unit related to the count for the number of items in the inner pack."
},
        "INNER_PACK_SIZE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Indicates the inner pack count or size. The inner pack size unit of measure qualified the value entered here."
},
        "INNER_PACK_SIZE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the pack size entry. Packaged item = case of soda - inner pack = six pack inner pack size = 4, inner pack unit of measure = six pack."
},
        "PACKAGE_SU_VOLUME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Packaged ship unit volume."
},
        "PACKAGE_SU_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Package ship unit volume unit of measure."
},
        "PACKAGE_SU_VOLUME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Package ship unit volume in the base unit of measure."
},
        "PACKAGE_SU_LENGTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Package ship unit ship unit length."
},
        "PACKAGE_SU_LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Package ship unit length unit of measure."
},
        "PACKAGE_SU_LENGTH_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Package ship unit ship unit length in the base unit of measure."
},
        "PACKAGE_SU_WIDTH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Packaged ship unit width."
},
        "PACKAGE_SU_WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Package ship unit width unit of measure."
},
        "PACKAGE_SU_WIDTH_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Package ship unit width in the base unit of measure."
},
        "PACKAGE_SU_HEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Package ship unit ship unit height."
},
        "PACKAGE_SU_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Package ship unit height unit of measure."
},
        "PACKAGE_SU_HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Package ship unit ship unit height in the base unit of measure."
},
        "IS_DEFAULT_PACKAGING": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Check box indicating if the information entered is the default packaging for this item."
},
        "IS_HAZARDOUS": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Check box indicating if the information entered is the packaged item is considered hazardous."
},
        "CORE_DIAMETER": {
          "type": "NUMBER",
          "nullable": true,
          "info": "For cylindrical objects, this defines the diameter of the core."
},
        "CORE_DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "For cylindrical objects, unit of measure for the diameter of the core."
},
        "CORE_DIAMETER_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "For cylindrical objects, the base value of the diameter of the core."
},
        "PACKAGE_SU_DIAMETER": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Packaged ship unit diameter."
},
        "PACKAGE_SU_DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Package ship unit diameter unit of measure."
},
        "PACKAGE_SU_DIAMETER_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Package ship unit diameter in the base unit of measure."
},
        "BB_HANDLING_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
                    "CONVEYABLE",
                    "NON-CON",
                    "REPACK"
          ],
          "info": "Indicates the Batch Balancer handling type for the packaged item. Valid handling types are conveyable, non-conveyable, and repack. Batch Balancer logic uses this info to determine potential batches for order release line assignment in the event an order release needs to be split across multiple batches."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "PACKAGED_ITEM_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PACKAGED_ITEM_TYPE",
          "info": "Type of packaged item."
},
        "LOAD_CONFIG_RULE_RANK": {
          "type": "NUMBER",
          "nullable": true,
          "info": "During 3D loading of mixed items, the packaged item with the highest rank will be used to find the matching stackability rule and load config rule."
},
        "THU_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC_PROFILE",
          "info": "Defines all valid THUs the PI can be packed into."
},
        "PARCEL_PACKTYPE": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Parcel package type."
},
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150)"
},
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER"
},
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
},
        "IS_ALLOW_MIXED_FREIGHT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Allow mixed freight should be selected if the packaged item can be packed into a ship unit with other mixable packaged items."
},
        "BULK_MIXING_FAMILY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BULK_MIXING_FAMILY",
          "info": "Indicates the bulk mixing family the packaged item belongs to."
},
        "COMPARTMENT_TYPE_PROF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COMPARTMENT_TYPE_PROF",
          "info": "Compartment type profile attached to the packaged item."
},
        "CATEGORY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PACKAGED_ITEM_CATEGORY",
          "info": "The GID for the packaged item category."
},
        "PRIORITY": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "This column defines the priority associated with an packaged item."
},
        "IS_NESTABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Specifies if the packaged item is nestable or not"
},
        "INCR_NESTING_HEIGHT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Specifies the incremental nesting height for the PI"
},
        "INCR_NESTING_HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "INCR_NESTING_HEIGHT_BASE": {
          "type": "NUMBER",
          "nullable": true
}
      },
      "fk_tables": [
        "ALLOCATION_D",
        "ALLOCATION_OB_LINE",
        "COMPARTMENT_PI_JOIN",
        "DM_TRANSACTION",
        "EQUIPMENT_GROUP_PI_JOIN",
        "EQUIPMENT_LOAD_HISTORY",
        "HAZMAT_ITEM",
        "IE_S_SHIP_UNIT_LINE",
        "ITEM_VALUE_SET",
        "LOAD_CNFG_3D_PATTERN_D",
        "LOAD_CONFIG_RULE",
        "OB_LINE",
        "OB_SHIP_UNIT_CONTENT",
        "ORDER_RELEASE_LINE",
        "PACKAGED_ITEM_PROFILE_D",
        "PACKAGED_ITEM_REFNUM",
        "PACKAGED_ITEM_REMARK",
        "PI_PU_JOIN",
        "PI_RESIDUE_COMPAT_D",
        "PKG_ITEM_ACCESSORIAL",
        "PKG_ITEM_EQUIP_REF_UNIT_JOIN",
        "PRU_USAGE",
        "QUOTE_SHIP_UNIT",
        "SERVICE_TEMPLATE",
        "SHIPMENT",
        "SHIP_UNIT_LINE",
        "STACKING_COMPATIBILITY",
        "S_SHIP_UNIT_LINE",
        "TI_HI"
]
    }
  }
};