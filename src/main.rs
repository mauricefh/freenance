#![allow(unused)]

use serde::{Deserialize, Serialize};
use std::io::{self, Write};
use std::path::Path;

pub enum Recurring {
    DAILY,
    WEEKLY,
    BIWEEKLY,
    MONTHLY,
    QUARTERLY,
    SEMIANNUALLY,
    ANNUALLY,
    CUSTOM,
}

pub enum AccountType {
    CASH,
    CHECKING,
    SAVINGS,
    CREDIT,
}

pub struct Tag {
    pub name: String,
}

pub struct Account {
    pub name: String,
    pub balance: f64,
    pub tags: Vec<Tag>,
    pub account_type: AccountType,
}

pub struct Income {
    pub name: String,
    pub amount: f64,
    pub due_date: String,
    pub recurring: bool,
    pub recurring_period: Option<Recurring>,
    pub tags: Vec<Tag>,
}

pub struct Bill {
    pub name: String,
    pub amount: f64,
    pub due_date: String,
    pub recurring: bool,
    pub recurring_period: Option<Recurring>,
    pub tags: Vec<Tag>,
    pub account: Account,
}

pub struct Transaction {
    pub name: String,
    pub amount: f64,
    pub date: String,
    pub tags: Vec<Tag>,
    pub account: Account,
}

fn main() {
    splash_screen();
    init();
}

fn splash_screen() {
    let art = r#"
 $$$$$   $$$$$   $$$$$   $$$$$   $   $    $$$$$    $   $    $$$$$    $$$$$
 $       $   $   $       $       $$  $   $     $   $$  $   $        $
 $$$$    $$$$$   $$$$    $$$$    $ $ $   $$$$$$$   $ $ $   $        $$$$
 $       $  $    $       $       $  $$   $     $   $  $$   $        $
 $       $   $   $$$$$   $$$$$   $   $   $     $   $   $    $$$$$    $$$$$
    "#;

    println!("{}", art);
}

fn init() {
    println!("Welcome to Freenance!");
    main_menu();
}

fn main_menu() {
    println!("1. Account");
    println!("2. Income");
    println!("3. Bill");
    println!("4. Transaction");
    println!("5. Tag");
    print!("\nPlease make a selection: ");

    let mut selection = String::new();

    // Read input
    io::stdout().flush().unwrap(); // Make sure prompt appears before user input
    match io::stdin().read_line(&mut selection) {
        Ok(_) => {
            // Trim the input to remove any extra spaces or newlines
            let selection = selection.trim();

            // Attempt to parse the input as a number
            match selection.parse::<u32>() {
                Ok(num) => match num {
                    1 => account_menu(),
                    2 => income_menu(),
                    3 => bill_menu(),
                    4 => transaction_menu(),
                    5 => tag_menu(),
                    _ => println!("Invalid selection, please try again."),
                },
                Err(_) => {
                  println!("\nInvalid input, please enter a number between 1 and 5.");
                  main_menu();
                }
            }
        }
        Err(error) => println!("Error reading input: {error}"),
    }
}

fn account_menu() {
    println!("Account");
}

fn income_menu() {
    println!("Income");
}

fn bill_menu() {
    println!("Bill");
}

fn transaction_menu() {
    println!("transaction");
}

fn tag_menu() {
    println!("tag");
}
