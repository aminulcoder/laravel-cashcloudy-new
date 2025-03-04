<?php

namespace App\Http\Controllers;

use App\Services\ExchangeRateService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminDashboard extends Controller
{
    protected $exchangeRateService;

    public function __construct(ExchangeRateService $exchangeRateService)
    {
        $this->exchangeRateService = $exchangeRateService;
    }

    public function index()
    {
        $rate = $this->exchangeRateService->getRate('USD', 'BDT');


        // return $rate;
        return Inertia::render('Admin/Dashboard', [
            'rate' => $rate,
        ]);
    }

}
