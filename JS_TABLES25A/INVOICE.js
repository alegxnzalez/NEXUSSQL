// INVOICE.js

window.INVOICE = {
  "tables": {
    "INVOICE": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the invoice. "
        },
        "INVOICE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the invoice. "
        },
        "INVOICE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "I",
            "B"
          ],
          "info": "Indicates whether this is a bill or an invoice (valid values are 'I' or 'B'). INVOICE_TYPE indicates whether this is a bill or an invoice (valid values are 'I' or 'B'). "
        },
        "INVOICE_SOURCE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "G",
            "I",
            "M"
          ],
          "info": "Valid values are G, I, M. "
        },
        "ENTERED_BY_GL_USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Identifies which GL user entered the invoice into the system. "
        },
        "INVOICE_NUMBER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Indicates the number that was assigned to the invoice. "
        },
        "SERVPROV_ALIAS_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SERVPROV_ALIAS_QUAL",
          "info": "Identifies the service provider qualifier (such as SCAC), which is then associated with the value in servprov_alias_value. "
        },
        "SERVPROV_ALIAS_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "Identifies service provider that handled the shipment related to the invoice. The qualifier servprov_alias_qual_gid qualifies the value, which can be a scec code, or another descriptor for the service provider. "
        },
        "CORRECTION_CODE_ID": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "info": "Correction code identifier. "
        },
        "INVOICE_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The date of the invoice. "
        },
        "CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The GID for currency. "
        },
        "NET_AMOUNT_DUE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The net amount that is due for the invoice. "
        },
        "NET_AMOUNT_DUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The net amount due GID. "
        },
        "NET_AMOUNT_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The amount that is due in the base currency. "
        },
        "NET_DUE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date on which the net amount for the invoice is due. "
        },
        "PAYMENT_METHOD_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYMENT_METHOD_CODE",
          "info": "The method of payment that is expected for the invoice. Examples include: check, cash on deliver, credit card and electronic funds transfer. "
        },
        "START_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The start range for which this invoice was generated. "
        },
        "END_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The end range for which this invoice was generated. "
        },
        "INVOICE_SERVICE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOICE_SERVICE_CODE",
          "info": "The type of service that was performed. Foreign key to INVOICE_SERVICE_CODE. "
        },
        "INCO_TERM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INCO_TERM",
          "info": "The terms of sale for this particular invoice. "
        },
        "DISCOUNT_AMOUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total dollar amount of any discounts applied to the invoice. "
        },
        "DISCOUNT_AMOUNT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The discount amount GID. "
        },
        "DISCOUNT_AMOUNT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The amount of the discount in the base currency. "
        },
        "DISCOUNT_PERCENTAGE": {
          "type": "NUMBER(5,2)",
          "nullable": true,
          "info": "Either a specific amount for the discount or a percentage to be used for the discount. "
        },
        "DISCOUNT_DAYS_DUE": {
          "type": "NUMBER(3)",
          "nullable": true,
          "info": "The number of days in the terms discount period by which payment is due if the terms of the discount are to be earned. "
        },
        "DISCOUNT_DUE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date that the payment must be made by in order for the discount to be earned. "
        },
        "ORIGIN_STATION_CITY": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The city in which the related shipment began. "
        },
        "ORIGIN_STATION_FSAC": {
          "type": "VARCHAR2(5)",
          "nullable": true,
          "info": "The FSAC code for the station in which the related shipment began. "
        },
        "ORIGIN_STATION_SPLC": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The SPLC code for the station in which the related shipment began. "
        },
        "ORIGIN_STATION_PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true,
          "info": "The province code in which the related shipment began. "
        },
        "ORIGIN_STATION_POSTAL_CODE": {
          "type": "VARCHAR2(15)",
          "nullable": true,
          "info": "The postal code in which the related shipment began. "
        },
        "ORIGIN_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "The origin country code GID. "
        },
        "DEST_STATION_CITY": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The city in which the related shipment ends. "
        },
        "DEST_STATION_FSAC": {
          "type": "VARCHAR2(5)",
          "nullable": true,
          "info": "The FSAC code for the station in which the related shipment ended. "
        },
        "DEST_STATION_SPLC": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The SPLC code for the destination of the shipment which relates to this invoice. "
        },
        "DEST_STATION_PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true,
          "info": "The province code in which the related shipment ended. "
        },
        "DEST_STATION_POSTAL_CODE": {
          "type": "VARCHAR2(15)",
          "nullable": true,
          "info": "The postal code in which the related shipment ended. "
        },
        "DEST_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "The destination country code GID. "
        },
        "LETTER_OF_CREDIT_EXP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date until which the letter of credit is in effect. After this date, the letter of credit expires. "
        },
        "LETTER_OF_CREDIT_ISSUE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date that the letter of credit was issued. "
        },
        "LETTER_OF_CREDIT_NUMBER": {
          "type": "VARCHAR2(40)",
          "nullable": true,
          "info": "The identification number of the letter of credit. "
        },
        "VESSEL_CODE_QUALIFIER": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "The qualifier for the vessel. "
        },
        "VESSEL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The vessel that was used for the shipment that relates to the invoice. "
        },
        "VESSEL_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "The vessel country code GID. "
        },
        "VESSEL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VESSEL",
          "info": "Vessel ID for the invoice. "
        },
        "VES_OP_SERVPROV_ALIAS_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_ALIAS_QUAL",
          "info": "The vessel operator service provider alias qualifier GID. "
        },
        "VES_OP_SERVPROV_ALIAS_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Service provider alias of the vessel operator. "
        },
        "VOYAGE_NUMBER": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The number of the voyage that relates to the shipment for which this invoice is being created. "
        },
        "PARENT_INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOICE",
          "info": "The parent invoice GID. "
        },
        "DATE_RECEIVED": {
          "type": "DATE",
          "nullable": true,
          "info": "The date the invoice was received. "
        },
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Indicators are icons that can be assigned to business objects in search Results pages and other lists to mark the condition or state of a business object. You can use indicators to mark the history, status or any other condition of a business object. For example, in the Shipment Manager you could use the green marker to indicate buy shipments for which tender has been accepted. "
        },
        "SUPPLY_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "The Supply Country Code ID represents the country that the goods are coming from. "
        },
        "SERVPROV_VAT_REG_NO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VAT_REGISTRATION",
          "info": "The service provider VAT Registration ID is the VAT tax ID for the service provider. "
        },
        "CUSTOMER_VAT_REG_NO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VAT_REGISTRATION",
          "info": "The Customer VAT Registration ID is the VAT tax ID for the customer. "
        },
        "VAT_EXEMPT_VALUE": {
          "type": "VARCHAR2(25)",
          "nullable": false,
          "values": [
            "NOT_EXEMPT",
            "EXEMPT_WITH_CRED",
            "EXEMPT_WITHOUT_CRED"
          ],
          "info": "The VAT Exempt field is used when the bill is exempt from the tax. When it is checked, you need to specify whether the bill is Exempt with Credit or Exempt without Credit. "
        },
        "NET_AMT_DUE_WITH_TAX": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The Amount Due with VAT is the total amount due plus any applicable value added taxes (VAT). "
        },
        "NET_AMT_DUE_W_TAX_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The currency qualifier for the amount due. "
        },
        "NET_AMT_DUE_WITH_TAX_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The net amount due in the base currency. "
        },
        "IS_PASS_THROUGH": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The Pass Through check box allows to the invoice to be approved for payment without being matched to a shipment. "
        },
        "CONSOLIDATION_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "values": [
            "PARENT",
            "STANDARD",
            "CHILD",
            "JOB"
          ],
          "info": "The value is set based on the invoice type involved - there are three consolidation types- STANDARD for a stand-alone invoice, PARENT for a parent invoice (for example, a consolidation invoice), or CHILD for a child invoice. "
        },
        "IS_FIXED_COST": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "The Fixed Cost check box allows you to override the amount due calculation. When checked the amount due that you enter will be used regardless of the base and other charges. "
        },
        "BASE_CHARGE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The Base Charge is the sum of the shipping charges for the invoice. "
        },
        "BASE_CHARGE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The currency qualifier for the base charge. "
        },
        "BASE_CHARGE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Base amount due in the base currency. "
        },
        "OTHER_CHARGE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The Other Charge is the sum of the accessorial and other non-shipping charges for the invoice. "
        },
        "OTHER_CHARGE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the currency associated with the other charges. "
        },
        "OTHER_CHARGE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The other base charge. "
        },
        "IS_CREDIT_NOTE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if this invoice is a credit note "
        },
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the invoice. "
        },
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the invoice. "
        },
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the invoice. "
        },
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the invoice. "
        },
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the invoice. "
        },
        "EXCHANGE_RATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Indicates the date to be used for any currency conversions; if null, the latest conversion should be used. "
        },
        "EXCHANGE_RATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXCHANGE_RATE",
          "info": "Indicates the set of exchange rates to use for currency conversions; if null, the default set should be used "
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The GID for the service provider. "
        },
        "SAIL_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The sail date is the date the vessel sails. "
        },
        "SAIL_CUTOFF_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The sail cutoff date is the latest date in which you can get your cargo onto the vessel. "
        },
        "RAIL_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The rail date is the date when a container gets put on rail car. "
        },
        "IS_HAZARDOUS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicator for identifying whether the invoiced shipment was or was not identified as carrying hazardous or dangerous goods. "
        },
        "IS_TEMPERATURE_CONTROL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicator for identifying whether the invoiced shipment was or was not identified as requiring temperature control. "
        },
        "INVOICING_PROCESS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "B",
            "S"
          ],
          "info": "N/A "
        },
        "IS_VAT_ANALYSIS_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the VAT Analysis is fixed (user entered) and the system should not try to calculate it. "
        },
        "ORIGINAL_INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOICE",
          "info": "For supplemental bills. This references the original bill. "
        },
        "DISCOUNT_AMT_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Functional currency amount for the discount amount. A functional currency is a standardized amount as specified in domain settings. It is also stored in the database and is intended to be used as an accounting currency. "
        },
        "DISCOUNT_AMT_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for discount amount functional currency. "
        },
        "NET_AMOUNT_DUE_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for the net amount due. "
        },
        "NET_AMOUNT_DUE_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for the net amount due functional currency. "
        },
        "NET_AMT_W_TAX_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for net amount due with tax. "
        },
        "NET_AMT_W_TAX_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for currency for the net amount due with VAT functional currency. "
        },
        "BASE_CHARGE_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for the base charge. "
        },
        "BASE_CHARGE_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for currency for the base charge in the functional currency. "
        },
        "OTHER_CHARGE_FN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The functional currency amount for other charge. "
        },
        "OTHER_CHARGE_FN_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CURRENCY",
          "info": "The GID for currency. "
        },
        "GL_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "GL Date for the invoice as set by agent or manual action. "
        },
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Boolean field. When it is set to \"Y\", this row and its child data will be purged. "
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
          "info": "Date and time of the most recent data update. "
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_CURRENCY1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_CURRENCY1_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (101) "
        },
        "ATTRIBUTE_CURRENCY1_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (101) "
        },
        "ATTRIBUTE_CURRENCY2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_CURRENCY2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (101) "
        },
        "ATTRIBUTE_CURRENCY2_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (101) "
        },
        "ATTRIBUTE_CURRENCY3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_CURRENCY3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (101) "
        },
        "ATTRIBUTE_CURRENCY3_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (101) "
        },
        "ATTRIBUTE_NUMBER11": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER12": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER13": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER14": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER15": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER16": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER17": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER18": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER19": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER20": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_DATE11": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE12": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE13": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE14": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE15": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE16": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE17": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE18": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE19": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE20": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "INVOICE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOICE_SPLIT_RULE",
          "info": "The rule ID used for generating this invoice/bill. "
        },
        "INV_CONS_CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONSTRAINT_SET",
          "info": "Constraint Set ID is used for creating a consolidated invoice/bill. This will be used for identifying the parent invoice/bill when you add more invoices/bills with the same constraint set."
        }
      },
      "fk_tables": [
        "ALLOCATION_BASE",
        "INVOICE",
        "INVOICE_EQUIPMENT_DETAIL",
        "INVOICE_INVOLVED_PARTY",
        "INVOICE_LINEITEM",
        "INVOICE_NOTE",
        "INVOICE_PORT",
        "INVOICE_PROTECTIVE_SERVICE",
        "INVOICE_REFNUM",
        "INVOICE_REMARK",
        "INVOICE_ROUTE",
        "INVOICE_SHIPMENT",
        "INVOICE_STATUS",
        "INVOICE_STOP",
        "INVOICE_SUMMARY",
        "INVOICE_SUMMARY_DETAIL",
        "INVOICE_TEXT",
        "INVOICE_TR_EVENT_CONTACT",
        "INV_SUPPLY_PROVINCE_VAT_REG",
        "JOB_BILL_JOIN",
        "ORDER_RELEASE_BILL",
        "SHIPMENT_BILL",
        "VAT_ANALYSIS",
        "VOUCHER"
      ]
    }
  }
};
